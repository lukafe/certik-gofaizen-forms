export type ClientLogo = {
  name: string;
  /** SVG under /public/logos/clients/ — drop official monochrome assets in with these filenames */
  file: string;
};

const c = (name: string, slug: string): ClientLogo => ({
  name,
  file: `/logos/clients/${slug}.svg`,
});

/**
 * Client logo marquee — order matches certik.com as of the brief.
 * The strip is split into two rows: row one scrolls left, row two right.
 * All current files are text placeholders; replace with official
 * monochrome/white SVGs from CertiK's media kit (see README TODO list).
 */
export const clients: ClientLogo[] = [
  c("Binance", "binance"),
  c("Tether", "tether"),
  c("OKX", "okx"),
  c("Apple", "apple"),
  c("Samsung", "samsung"),
  c("Ripple", "ripple"),
  c("Crypto.com", "crypto-com"),
  c("PancakeSwap", "pancakeswap"),
  c("Cardano", "cardano"),
  c("Fireblocks", "fireblocks"),
  c("Aptos", "aptos"),
  c("TON", "ton"),
  c("Gala", "gala"),
  c("The Sandbox", "the-sandbox"),
  c("Ethereum", "ethereum"),
  c("WEMIX", "wemix"),
  c("Bitget", "bitget"),
  c("Trust Wallet", "trust-wallet"),
  c("Paxos", "paxos"),
  c("Pepe", "pepe"),
  c("Hedera", "hedera"),
  c("Ondo", "ondo"),
  c("Frax", "frax"),
  c("Ant Group", "ant-group"),
  c("Sei", "sei"),
  c("Aethir", "aethir"),
  c("peaq", "peaq"),
  c("Bitcoin.com", "bitcoin-com"),
  c("Wormhole", "wormhole"),
  c("1inch", "1inch"),
  c("Venus", "venus"),
  c("BloFin", "blofin"),
  c("Floki", "floki"),
  c("WalletConnect", "walletconnect"),
  c("Sui", "sui"),
  c("Kaia", "kaia"),
];

/** First half scrolls left, second half scrolls right (two-row strip). */
export const clientRows: [ClientLogo[], ClientLogo[]] = [
  clients.slice(0, Math.ceil(clients.length / 2)),
  clients.slice(Math.ceil(clients.length / 2)),
];
