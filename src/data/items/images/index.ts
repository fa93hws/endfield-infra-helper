import type { AicProductKey } from '../aic';
import type { NaturalItemKey } from '../natural';

export { oreImages } from './ore';
export { refinedOreImages } from './refined_ore';
export { orePowderImages } from './ore_powder';
export { plantImages } from './plant';
export { seedImages } from './seed';
export { plantPowderImages } from './plant_powder';
export { medicineImages } from './medicine';
export { bottleImages } from './bottle';
export { batteryImages } from './battery';
export { componentImages } from './component';
export { otherImages } from './other';

import { oreImages } from './ore';
import { refinedOreImages } from './refined_ore';
import { orePowderImages } from './ore_powder';
import { plantImages } from './plant';
import { seedImages } from './seed';
import { plantPowderImages } from './plant_powder';
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
  ...seedImages,
  ...plantPowderImages,
  ...medicineImages,
  ...bottleImages,
  ...batteryImages,
  ...componentImages,
  ...otherImages,
};
