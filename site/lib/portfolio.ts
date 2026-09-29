import manifest from "./portfolio-manifest.json";

export type PortfolioImage = {
  src: string;
  width: number;
  height: number;
  /** 1 = normal tile, 2 = larger "feature" tile used sparingly for rhythm */
  span: 1 | 2;
};

// A deterministic, hand-considered rhythm: every 7th and every 13th image
// (offset so the very first and last images stay standard-sized) is given
// a larger span to break the grid's monotony, echoing how a real album
// spread lets a strong image breathe. Adjust the two numbers below if you
// add/remove photos and want the rhythm to land differently.
const FEATURE_EVERY = [7, 13];

export const portfolioImages: PortfolioImage[] = manifest.map((item, i) => {
  const position = i + 1;
  const isFeature = FEATURE_EVERY.some((n) => position % n === 0);
  return {
    src: `/portfolio/${item.file}`,
    width: item.width,
    height: item.height,
    span: isFeature ? 2 : 1,
  };
});
