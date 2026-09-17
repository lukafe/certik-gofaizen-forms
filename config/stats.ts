export type Stat = {
  /** Final numeric value the counter animates to */
  value: number;
  /** Prefix rendered before the number, e.g. "$" */
  prefix?: string;
  /** Suffix rendered after the number, e.g. "B", "M", "+" */
  suffix?: string;
  /** Decimal places shown while counting */
  decimals?: number;
  label: string;
};

/** Hero stat counters — mirrors the strip on certik.com. Edit freely. */
export const stats: Stat[] = [
  { value: 519, prefix: "$", suffix: "B", label: "Market Cap Assessed" },
  { value: 5500, suffix: "+", label: "Clients Served" },
  { value: 2, prefix: "$", suffix: "B", label: "Valuation" },
  { value: 1.8, suffix: "M", decimals: 1, label: "Monthly Skynet Users" },
];
