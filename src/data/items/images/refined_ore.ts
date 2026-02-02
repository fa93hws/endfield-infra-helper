import type { OreRefinedKey } from '../aic';
import Origocrust from './assets/Origocrust.png';
import AmethystFiber from './assets/Amethyst_Fiber.png';
import Ferrium from './assets/Ferrium.png';
import StabilizedCarbon from './assets/Stabilized_Carbon.png';
import PackedOrigocrust from './assets/Packed_Origocrust.png';
import CrystonFiber from './assets/Cryston_Fiber.png';
import Steel from './assets/Steel.png';

export const refinedOreImages: Record<Exclude<OreRefinedKey, 'carbon'>, string> = {
  origocrust: Origocrust,
  amethystFiber: AmethystFiber,
  ferrium: Ferrium,
  stabilizedCarbon: StabilizedCarbon,
  packedOrigocrust: PackedOrigocrust,
  crystonFiber: CrystonFiber,
  steel: Steel,
};
