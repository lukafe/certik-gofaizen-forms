/**
 * Generates neutral text-wordmark placeholder SVGs for every logo slot
 * (clients, investors, CertiK, G&S) plus contact photo placeholders.
 *
 * These are intentionally NOT the companies' real logos — drop official
 * SVG assets (from CertiK's media kit / each brand's press kit) into the
 * same paths to replace them. Re-run with:  node scripts/generate-placeholders.mjs
 */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const wordmark = (name) => {
  const width = Math.max(60, Math.round(name.length * 13) + 16);
  const esc = name.replace(/&/g, "&amp;");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} 40" width="${width}" height="40" role="img" aria-label="${esc}">
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle"
    font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="600"
    fill="#ffffff" letter-spacing="0.5">${esc}</text>
</svg>
`;
};

const avatar = (initials) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160">
  <rect width="160" height="160" fill="#1a1e26"/>
  <circle cx="80" cy="62" r="26" fill="#39404d"/>
  <path d="M28 140c6-30 28-44 52-44s46 14 52 44v20H28z" fill="#39404d"/>
  <text x="80" y="150" text-anchor="middle" font-family="Arial" font-size="14" fill="#9aa4b2">${initials}</text>
</svg>
`;

const write = (rel, content) => {
  const path = join(root, rel);
  mkdirSync(dirname(path), { recursive: true });
  if (existsSync(path)) {
    console.log(`skip (exists): ${rel}`);
    return;
  }
  writeFileSync(path, content);
  console.log(`wrote: ${rel}`);
};

const clients = [
  ["Binance", "binance"], ["Tether", "tether"], ["OKX", "okx"], ["Apple", "apple"],
  ["Samsung", "samsung"], ["Ripple", "ripple"], ["Crypto.com", "crypto-com"],
  ["PancakeSwap", "pancakeswap"], ["Cardano", "cardano"], ["Fireblocks", "fireblocks"],
  ["Aptos", "aptos"], ["TON", "ton"], ["Gala", "gala"], ["The Sandbox", "the-sandbox"],
  ["Ethereum", "ethereum"], ["WEMIX", "wemix"], ["Bitget", "bitget"],
  ["Trust Wallet", "trust-wallet"], ["Paxos", "paxos"], ["Pepe", "pepe"],
  ["Hedera", "hedera"], ["Ondo", "ondo"], ["Frax", "frax"], ["Ant Group", "ant-group"],
  ["Sei", "sei"], ["Aethir", "aethir"], ["peaq", "peaq"], ["Bitcoin.com", "bitcoin-com"],
  ["Wormhole", "wormhole"], ["1inch", "1inch"], ["Venus", "venus"], ["BloFin", "blofin"],
  ["Floki", "floki"], ["WalletConnect", "walletconnect"], ["Sui", "sui"], ["Kaia", "kaia"],
  // Case-study carousel extras
  ["LINE", "line"], ["Ethereum Foundation", "ethereum-foundation"],
  ["Delphinus Lab", "delphinus-lab"],
];

const investors = [
  ["Binance", "binance"], ["Sequoia", "sequoia"], ["Coatue", "coatue"],
  ["Shunwei Capital", "shunwei"], ["Tiger Global", "tiger-global"],
  ["SoftBank", "softbank"], ["Goldman Sachs", "goldman-sachs"],
  ["Lightspeed", "lightspeed"], ["Coinbase", "coinbase"],
  ["Insight Partners", "insight-partners"], ["Advent International", "advent-international"],
  ["Yale University", "yale-university"],
];

for (const [name, slug] of clients)
  write(`public/logos/clients/${slug}.svg`, wordmark(name));
for (const [name, slug] of investors)
  write(`public/logos/investors/${slug}.svg`, wordmark(name));

write("public/logos/certik.svg", wordmark("CertiK"));
write("public/logos/gs.svg", wordmark("Gofaizen & Sherle"));
write("public/photos/lucas.svg", avatar("LC"));
write("public/photos/joe.svg", avatar("J"));
