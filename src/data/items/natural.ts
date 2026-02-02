export const ores = {
  originiumOre: '源石原矿',
  amethystOre: '紫水晶矿',
  ferriumOre: '蓝铁矿',
};

export const plants = {
  buckflower: '荞花',
  firebuckle: '映火荞花',
  sandleaf: '砂叶',
  citrome: '柑实',
  jincao: '锦草',
  yazhen: '芽针',
};

export const plantSeeds = {
  buckflowerSeed: '荞花种子',
  sandleafSeed: '砂叶种子',
  citromeSeed: '柑实种子',
};

export const otherNaturalItems = {
  cleanWater: '纯净水',
};

export const naturalItems = {
  ...ores,
  ...plants,
  ...otherNaturalItems,
};

export type OreKey = keyof typeof ores;
export type PlantKey = keyof typeof plants;
export type PlantSeedKey = keyof typeof plantSeeds;
export type OtherNaturalItemKey = keyof typeof otherNaturalItems;
export type NaturalItemKey = keyof typeof naturalItems;
