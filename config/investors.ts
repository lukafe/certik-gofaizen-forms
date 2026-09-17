export type Investor = {
  name: string;
  /** SVG under /public/logos/investors/ — text placeholders until replaced */
  file: string;
};

const i = (name: string, slug: string): Investor => ({
  name,
  file: `/logos/investors/${slug}.svg`,
});

/** "Backed by Leading Investors" grid, as on certik.com. */
export const investors: Investor[] = [
  i("Binance", "binance"),
  i("Sequoia", "sequoia"),
  i("Coatue", "coatue"),
  i("Shunwei Capital", "shunwei"),
  i("Tiger Global", "tiger-global"),
  i("SoftBank", "softbank"),
  i("Goldman Sachs", "goldman-sachs"),
  i("Lightspeed", "lightspeed"),
  i("Coinbase", "coinbase"),
  i("Insight Partners", "insight-partners"),
  i("Advent International", "advent-international"),
  i("Yale University", "yale-university"),
];
