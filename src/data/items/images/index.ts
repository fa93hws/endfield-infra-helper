import type { AicProductKey } from '../aic';
import type { NaturalItemKey } from '../natural';
import { batteryImages } from './battery';
import { bottledSolutionImages, bottleImages, solutionImages } from './bottle';
import { componentImages } from './component';
import { medicineImages } from './medicine';
import { oreImages, orePowderImages, refinedOreImages } from './ore';
import { otherImages } from './other';
import { plantImages, plantPowderImages, plantSeedImages } from './plant';

export const images: Record<AicProductKey | NaturalItemKey, string> = {
  ...oreImages,
  ...refinedOreImages,
  ...orePowderImages,
  ...plantImages,
  ...plantSeedImages,
  ...plantPowderImages,
  ...medicineImages,
  ...bottleImages,
  ...solutionImages,
  ...bottledSolutionImages,
  ...batteryImages,
  ...componentImages,
  ...otherImages,
};
