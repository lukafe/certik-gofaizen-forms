export type CaseStudy = {
  company: string;
  /** Logo under /public/logos/ (client placeholders reused where possible) */
  logo: string;
  /** Short blurb, as shown on certik.com's homepage card carousel */
  text: string;
};

/** Case-study card carousel below the client logo strip, as on certik.com. */
export const caseStudies: CaseStudy[] = [
  {
    company: "LINE",
    logo: "/logos/clients/line.svg",
    text: "CertiK has completed a security audit of LINE Blockchain and will join the network as a governance...",
  },
  {
    company: "Fireblocks",
    logo: "/logos/clients/fireblocks.svg",
    text: "Fireblocks integrates a CertiK-audited smart contract solution, using the audit as a foundation for...",
  },
  {
    company: "OKX",
    logo: "/logos/clients/okx.svg",
    text: "CertiK and OKX partner to enhance security across OKX's ecosystem, boosting trust and...",
  },
  {
    company: "Ant Group",
    logo: "/logos/clients/ant-group.svg",
    text: "CertiK has successfully completed the formal verification of HyperEnclave's core components,...",
  },
  {
    company: "Ethereum Foundation",
    logo: "/logos/clients/ethereum-foundation.svg",
    text: "Under an Ethereum Foundation grant, CertiK delivers Better Rocq tactics that streamline modular...",
  },
  {
    company: "Samsung",
    logo: "/logos/clients/samsung.svg",
    text: "Samsung has acknowledged CertiK's contributions to significantly enhancing the security...",
  },
  {
    company: "Delphinus Lab",
    logo: "/logos/clients/delphinus-lab.svg",
    text: "Delphinus Lab and CertiK partnered to enhance zkWasm security. CertiK completed the first formal proof of...",
  },
  {
    company: "TON",
    logo: "/logos/clients/ton.svg",
    text: "CertiK's audits significantly enhanced TON's security, including the formal verification of its...",
  },
  {
    company: "Sei",
    logo: "/logos/clients/sei.svg",
    text: "CertiK's comprehensive audit of the SEI Protocol identified and resolved critical issues, safeguarding the...",
  },
  {
    company: "Sui",
    logo: "/logos/clients/sui.svg",
    text: "CertiK earned Sui's top bug bounty of $600k for uncovering a critical vulnerability that had the potential...",
  },
  {
    company: "Bitget Wallet",
    logo: "/logos/clients/bitget.svg",
    text: "CertiK enhances the security of Bitget Wallet, helping protect millions of users across 130+...",
  },
  {
    company: "Apple",
    logo: "/logos/clients/apple.svg",
    text: "CertiK was recognized again in Apple's iOS 17 Security Update of three critical security vulnerabilities...",
  },
];
