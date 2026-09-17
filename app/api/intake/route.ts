import { NextRequest, NextResponse } from "next/server";
import { intakeSchema } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { sendNotification } from "@/lib/notify";
import { persistSubmission } from "@/lib/persist";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions — please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = intakeSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot filled → pretend success so bots don't adapt.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  data.submittedAt = data.submittedAt ?? new Date().toISOString();

  const [email, db] = await Promise.all([
    sendNotification(data),
    persistSubmission(data),
  ]);

  // Never drop a lead silently: if neither channel worked, log the
  // payload server-side and tell the client to retry.
  if (!email.ok && !db.ok) {
    console.error("Intake stored nowhere", {
      email: email.skipped,
      db: db.skipped,
      payload: data,
    });
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not record your submission. Please try again or email us directly.",
      },
      { status: 502 }
    );
  }

  if (!email.ok) console.warn("Intake email skipped:", email.skipped);
  if (!db.ok) console.warn("Intake DB write skipped:", db.skipped);

  return NextResponse.json({ ok: true });
}
