import type { AicProductKey } from '../aic';
import type { NaturalItemKey } from '../natural';
import { oreImages, refinedOreImages, orePowderImages } from './ore';
import { plantImages, plantSeedImages, plantPowderImages } from './plant';
import { medicineImages } from './medicine';
import { bottleImages } from './bottle';
import { batteryImages } from './battery';
import { componentImages } from './component';
import { otherImages } from './other';

export const images: Record<AicProductKey | NaturalItemKey, string> = {
  ...oreImages,
  ...refinedOreImages,
  ...orePowderImages,
  ...plantImages,
  ...plantSeedImages,
  ...plantPowderImages,
  ...medicineImages,
  ...bottleImages,
  ...batteryImages,
  ...componentImages,
  ...otherImages,
};
