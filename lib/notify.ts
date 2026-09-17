import { Resend } from "resend";
import type { IntakePayload } from "./validation";

/**
 * Email notification via Resend.
 * Env: RESEND_API_KEY, NOTIFY_EMAIL_TO (comma-separated), NOTIFY_EMAIL_FROM.
 * Missing config is reported, not thrown — a lost email must not lose a lead.
 */
export async function sendNotification(
  data: IntakePayload
): Promise<{ ok: boolean; skipped?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.NOTIFY_EMAIL_TO ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from =
    process.env.NOTIFY_EMAIL_FROM ?? "CertiK Partner Intake <onboarding@resend.dev>";

  if (!apiKey) return { ok: false, skipped: "RESEND_API_KEY not set" };
  if (to.length === 0) return { ok: false, skipped: "NOTIFY_EMAIL_TO not set" };

  const rows: [string, string][] = [
    ["Full name", data.fullName],
    ["Company / project", data.company],
    ["Role", data.role || "—"],
    ["Email", data.email],
    [
      "Preferred contact",
      data.contactHandle
        ? `${data.contactChannel} (${data.contactHandle})`
        : data.contactChannel,
    ],
    ["Country", data.country],
    ["Services of interest", data.services.join(", ")],
    ["Licensing status", data.licensingStatus],
    ["License jurisdiction(s)", data.jurisdictions || "—"],
    ["Blockchain(s) / tech stack", data.techStack || "—"],
    ["Expected timeline", data.timeline ?? "—"],
    ["Additional information", data.additionalInfo || "—"],
    ["Referral partner", data.referralPartner],
    ["UTM", data.utm ? JSON.stringify(data.utm) : "—"],
    ["Submitted at", data.submittedAt ?? new Date().toISOString()],
  ];

  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <h2 style="font-family:sans-serif">New partner intake — ${esc(data.company)}</h2>
    <table cellpadding="8" cellspacing="0" border="0"
      style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v], idx) => `
        <tr style="background:${idx % 2 ? "#f6f8fa" : "#ffffff"}">
          <td style="border:1px solid #e1e4e8;font-weight:600;white-space:nowrap">${esc(k)}</td>
          <td style="border:1px solid #e1e4e8">${esc(v)}</td>
        </tr>`
        )
        .join("")}
    </table>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: `Partner intake: ${data.company} (${data.fullName})`,
    html,
    replyTo: data.email,
  });

  if (error) {
    console.error("Resend error:", error);
    return { ok: false, skipped: error.message };
  }
  return { ok: true };
}
