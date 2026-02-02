import Sandleaf from './assets/Sandleaf.png';
import Buckflower from './assets/Buckflower.png';
import Citrome from './assets/Citrome.png';
import Firebuckle from './assets/Firebuckle.png';
import Jincao from './assets/Jincao.png';
import Yazhen from './assets/Yazhen.png';
import SandLeafSeed from './assets/Sandleaf_Seed.png';
import BuckflowerSeed from './assets/Buckflower_Seed.png';
import CitromeSeed from './assets/Citrome_Seed.webp';
import type { PlantPowderKey } from '../aic';
import SandleafPowder from './assets/Sandleaf_Powder.png';
import BuckflowerPowder from './assets/Buckflower_Powder.png';
import GroundBucketFlowerPowder from './assets/Ground_Buckflower_Powder.png';
import CitromePowder from './assets/Citrome_Powder.webp';
import GroundCitromePowder from './assets/Ground_Citrome_Powder.png';
import { PlantKey, PlantSeedKey } from '../natural';

export const plantImages: Record<PlantKey, string> = {
  sandleaf: Sandleaf,
  buckflower: Buckflower,
  citrome: Citrome,
  firebuckle: Firebuckle,
  jincao: Jincao,
  yazhen: Yazhen,
};

export const plantSeedImages: Record<PlantSeedKey, string> = {
  sandleafSeed: SandLeafSeed,
  buckflowerSeed: BuckflowerSeed,
  citromeSeed: CitromeSeed,
};

export const plantPowderImages: Record<PlantPowderKey, string> = {
  sandleafPowder: SandleafPowder,
  buckflowerPowder: BuckflowerPowder,
  groundBuckflowerPowder: GroundBucketFlowerPowder,
  citromePowder: CitromePowder,
  groundCitromePowder: GroundCitromePowder,
};
