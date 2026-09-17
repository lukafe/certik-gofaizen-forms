import { createClient } from "@supabase/supabase-js";
import type { IntakePayload } from "./validation";

/**
 * Persist a submission to Supabase (table: intake_submissions).
 * Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY.
 * See README for the CREATE TABLE statement.
 *
 * Missing config is reported, not thrown — the email notification (or the
 * server log line in the route) still carries the lead.
 */
export async function persistSubmission(
  data: IntakePayload
): Promise<{ ok: boolean; skipped?: string }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    return { ok: false, skipped: "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set" };
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const { error } = await supabase.from("intake_submissions").insert({
    full_name: data.fullName,
    company: data.company,
    role: data.role || null,
    email: data.email,
    contact_channel: data.contactChannel,
    contact_handle: data.contactHandle || null,
    country: data.country,
    services: data.services,
    licensing_status: data.licensingStatus,
    jurisdictions: data.jurisdictions || null,
    tech_stack: data.techStack || null,
    timeline: data.timeline ?? null,
    additional_info: data.additionalInfo || null,
    referral_partner: data.referralPartner,
    utm: data.utm ?? null,
    submitted_at: data.submittedAt ?? new Date().toISOString(),
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return { ok: false, skipped: error.message };
  }
  return { ok: true };
}

/*
 * ── Webhook alternative ─────────────────────────────────────────────
 * If you'd rather pipe submissions to a webhook (Zapier, Make, Slack,
 * an internal endpoint) instead of Supabase, replace the body of
 * persistSubmission with:
 *
 *   const webhookUrl = process.env.INTAKE_WEBHOOK_URL;
 *   if (!webhookUrl) return { ok: false, skipped: "INTAKE_WEBHOOK_URL not set" };
 *   const res = await fetch(webhookUrl, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(data),
 *   });
 *   return res.ok
 *     ? { ok: true }
 *     : { ok: false, skipped: `Webhook responded ${res.status}` };
 * ────────────────────────────────────────────────────────────────────
 */
