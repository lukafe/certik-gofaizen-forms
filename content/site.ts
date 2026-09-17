/**
 * All page copy lives here — nothing is hard-coded in components.
 * [Bracketed] values are placeholders awaiting final content.
 */
export const site = {
  meta: {
    title: "CertiK × Gofaizen & Sherle — Partner Security Offer",
    description:
      "Official partner offer for Gofaizen & Sherle clients: CertiK security audits, penetration testing and compliance services with a 20% partner discount.",
  },

  header: {
    nav: [
      { label: "Partnership", href: "#partnership" },
      { label: "Partner Offer", href: "#offer" },
      { label: "Services", href: "#services" },
      { label: "Contacts", href: "#contacts" },
    ],
    cta: { label: "Get Started", href: "#intake" },
  },

  hero: {
    eyebrow: "CertiK × Gofaizen & Sherle",
    pill: "Official partner offer for Gofaizen & Sherle clients",
    headline: "Security Trusted by the Largest Names in Web3",
    subheadline:
      "CertiK, the largest blockchain security auditor, partners with Gofaizen & Sherle to secure your project from license to launch.",
    primaryCta: { label: "Request Your Partner Offer", href: "#intake" },
    secondaryCta: { label: "Talk to an Expert", href: "#contacts" },
  },

  clientsStrip: {
    eyebrow: "Trusted by industry leaders",
  },

  partnership: {
    id: "partnership",
    eyebrow: "Why this partnership",
    title: "Licensing and Security, Covered End to End",
    intro:
      "Getting licensed is only half the journey — regulators increasingly expect independent security and technical assurance alongside the legal work. Together, Gofaizen & Sherle and CertiK cover both.",
    columns: [
      {
        logo: "/logos/gs.svg",
        name: "Gofaizen & Sherle",
        heading: "Licensing & Legal Structuring",
        body: "G&S guides your company through licensing, corporate structuring and regulatory strategy across key crypto jurisdictions — from application to approval.",
      },
      {
        logo: "/logos/certik.svg",
        name: "CertiK",
        heading: "Security & Technical Assurance",
        body: "CertiK delivers the audits, penetration tests, security assessments and compliance tooling regulators expect — independent, recognized and battle-tested.",
      },
    ],
  },

  offer: {
    id: "offer",
    eyebrow: "Partner package",
    title: "What Gofaizen & Sherle Clients Receive",
    subtitle:
      "Every client referred through this page qualifies for the partner package below.",
  },

  services: {
    id: "services",
    eyebrow: "Services",
    title: "The Full CertiK Security Stack",
    subtitle:
      "Every service in the partner offer, from code audits to regulatory compliance.",
  },

  investors: {
    eyebrow: "Backed by Leading Investors",
  },

  testimonials: {
    eyebrow: "Testimonials",
    title: "Trusted by Thousands of Web3 Projects",
  },

  ctaBand: {
    title: "Ready to Secure Your Project?",
    subtitle:
      "Tell us about your project and claim the Gofaizen & Sherle partner offer — a CertiK expert will follow up within [48h].",
    cta: { label: "Fill in the Intake Form", href: "#intake" },
  },

  form: {
    id: "intake",
    eyebrow: "Partner intake",
    title: "Request Your Partner Offer",
    subtitle:
      "A short form — the more you share, the faster we can scope your engagement.",
    submitLabel: "Submit Request",
    submittingLabel: "Submitting…",
    successTitle: "Thanks — your request is in.",
    successBody: "Lucas or Joe will reach out within [48h].",
    errorGeneric:
      "Something went wrong submitting the form. Your answers are still here — please try again.",
    consentLabel:
      "I agree that my details are shared with CertiK and Gofaizen & Sherle so they can contact me about this request.",
  },

  contacts: {
    id: "contacts",
    eyebrow: "Your CertiK team",
    title: "Talk to Us Directly",
    subtitle: "Prefer a conversation first? Reach out or book a call.",
    bookCallLabel: "Book a Call",
    copiedLabel: "Copied!",
  },

  footer: {
    productLinksTitle: "Products",
    companyTitle: "Company",
    companyLinks: [
      { label: "About CertiK", href: "https://www.certik.com/company/about" },
      { label: "Gofaizen & Sherle", href: "https://gofaizen-sherle.com" },
      { label: "Skynet", href: "https://skynet.certik.com" },
      { label: "Blog", href: "https://www.certik.com/resources" },
    ],
    socials: [
      { label: "X / Twitter", href: "https://x.com/CertiK" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/certik" },
      { label: "Telegram", href: "https://t.me/CertiKCommunity" },
      { label: "YouTube", href: "https://www.youtube.com/@CertiK" },
    ],
    disclaimer:
      "The partner discount applies to new engagements referred through this page and is subject to scoping. This page is operated under the CertiK × Gofaizen & Sherle partnership.",
    copyright: `© ${new Date().getFullYear()} CertiK. All rights reserved.`,
  },
} as const;
