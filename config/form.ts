/** Option lists for the intake form — shared by the UI and the zod schema. */

export const contactChannels = [
  "Email",
  "Telegram",
  "WhatsApp",
  "Phone",
  "Other",
] as const;

export const servicesOfInterest = [
  "Smart Contract Audit",
  "Penetration Testing",
  "Security Assessment for licensing",
  "Compliance / KYC-AML",
  "Formal Verification",
  "Monitoring",
  "Advisory",
  "Not sure yet",
] as const;

export const licensingStatuses = [
  "Already licensed",
  "Application in progress",
  "Planning to apply",
  "Not applicable",
] as const;

export const timelines = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Exploring",
] as const;

/** Default referral partner; overridable via ?ref= */
export const defaultReferralPartner = "Gofaizen & Sherle";
