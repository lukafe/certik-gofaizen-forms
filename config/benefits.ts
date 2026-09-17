export type Benefit = {
  title: string;
  description: string;
  /** The highlighted card (the discount) renders larger with an accent border */
  highlighted?: boolean;
};

/** Partner package benefits (modeled on the CertiK × Colosseum one-pager). */
export const benefits: Benefit[] = [
  {
    title: "20% partner discount",
    description:
      "Standard 20% discount on CertiK services for clients referred by Gofaizen & Sherle through this page.",
    highlighted: true,
  },
  {
    title: "Priority scoping call",
    description:
      "A CertiK expert reaches out within [48h] of submitting the form — a 30-minute call to understand your codebase, timeline and target markets.",
  },
  {
    title: "CertiK Compliance access",
    description:
      "Access to CertiK Compliance, our global jurisdiction intelligence platform — licensing and regulatory requirements mapped across key markets.",
  },
  {
    title: "AI Auditor credits",
    description:
      "AI-powered scanning for Solidity, Rust and Move. Detect vulnerabilities and ship safer code from day one, before your manual audit.",
  },
  {
    title: "Skynet listing",
    description:
      "Once your audit is complete, your project is listed on Skynet, CertiK's security intelligence platform — 21,000+ projects monitored and 1.8M monthly users checking who's audited.",
  },
  {
    title: "Dedicated points of contact",
    description:
      "A direct line to Lucas and Joe at CertiK throughout your engagement — no ticket queues, just answers.",
  },
];

export type Product = {
  name: string;
  description: string;
  href: string;
};

/** Compact product strip mirroring certik.com's product cards. */
export const products: Product[] = [
  {
    name: "Code Audit",
    description: "Smart contract and protocol audits by the industry leader.",
    href: "https://www.certik.com/products/smart-contract-audit",
  },
  {
    name: "Penetration Testing",
    description: "Offensive security testing for apps, APIs and infrastructure.",
    href: "https://www.certik.com/products/penetration-testing",
  },
  {
    name: "DLT Security Solutions",
    description: "Security for distributed ledger platforms and L1/L2 chains.",
    href: "https://www.certik.com/products/l1-chain-audit",
  },
  {
    name: "VARA / MiCA & DORA Compliance",
    description:
      "Security assessments and reports regulators expect for licensing.",
    href: "https://www.certik.com/products/regulatory-consulting",
  },
  {
    name: "SkyInsights",
    description: "AML, KYT and crypto risk & compliance monitoring.",
    href: "https://www.certik.com/products/skyinsights",
  },
  {
    name: "Proof of Reserves",
    description: "Independent verification of custodial asset backing.",
    href: "https://www.certik.com/products/proof-of-reserves",
  },
  {
    name: "Formal Verification",
    description: "Mathematical proofs of smart contract correctness.",
    href: "https://www.certik.com/products/formal-verification",
  },
  {
    name: "Not Sure Where to Start?",
    description:
      "Tell us about your project and we'll scope the right services together.",
    href: "#intake",
  },
];
