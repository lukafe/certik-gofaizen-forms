export type Testimonial = {
  company: string;
  /** Logo file under /public/logos/clients/ (reuses the client marquee assets where possible) */
  logo?: string;
  quote: string;
  name: string;
  title: string;
};

/**
 * Testimonials carousel ("Trusted by Thousands of Web3 Projects").
 *
 * TODO: The build environment could not reach certik.com, so the quote
 * text, names and titles below are PLACEHOLDERS — copy the real quotes
 * verbatim from the homepage carousel before launch. Companies match
 * the ones featured there.
 */
export const testimonials: Testimonial[] = [
  {
    company: "Mysten Labs",
    logo: "/logos/clients/sui.svg",
    quote:
      "[Placeholder — replace with the Mysten Labs quote from the certik.com homepage carousel.]",
    name: "[Name]",
    title: "[Title], Mysten Labs",
  },
  {
    company: "Polygon",
    quote:
      "[Placeholder — replace with the Polygon quote from the certik.com homepage carousel.]",
    name: "[Name]",
    title: "[Title], Polygon",
  },
  {
    company: "KuCoin",
    quote:
      "[Placeholder — replace with the KuCoin quote from the certik.com homepage carousel.]",
    name: "[Name]",
    title: "[Title], KuCoin",
  },
  {
    company: "Bitget",
    logo: "/logos/clients/bitget.svg",
    quote:
      "[Placeholder — replace with the Bitget quote from the certik.com homepage carousel.]",
    name: "[Name]",
    title: "[Title], Bitget",
  },
  {
    company: "TON",
    logo: "/logos/clients/ton.svg",
    quote:
      "[Placeholder — replace with the TON quote from the certik.com homepage carousel.]",
    name: "[Name]",
    title: "[Title], TON",
  },
  {
    company: "Axelar",
    quote:
      "[Placeholder — replace with the Axelar quote from the certik.com homepage carousel.]",
    name: "[Name]",
    title: "[Title], Axelar",
  },
];
