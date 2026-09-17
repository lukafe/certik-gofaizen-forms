export type TrustBadge = {
  title: string;
  subtitle?: string;
};

/** Trust badges row, as on certik.com. */
export const trustBadges: TrustBadge[] = [
  { title: "SOC 2 Type II", subtitle: "Audited" },
  { title: "ISO 27001", subtitle: "Certified" },
  { title: "CB Insights", subtitle: "Top 50 Blockchain Companies" },
  { title: "World Economic Forum", subtitle: "Global Innovator" },
];
