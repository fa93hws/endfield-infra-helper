import type { PartKey } from '../aic';
import AmethystPart from './assets/Amethyst_Part.png';
import CrystonPart from './assets/Cryston_Part.png';
import FerriumPart from './assets/Ferrium_Part.png';
import SteelPart from './assets/Steel_Part.png';
import AmethystComponent from './assets/Amethyst_Component.png';
import FerriumComponent from './assets/Ferrium_Component.png';
import CrystonComponent from './assets/Cryston_Component.png';

export const componentImages: Record<PartKey, string> = {
  amethystPart: AmethystPart,
  crystonPart: CrystonPart,
  ferriumPart: FerriumPart,
  steelPart: SteelPart,
  amethystComponent: AmethystComponent,
  ferriumComponent: FerriumComponent,
  crystonComponent: CrystonComponent,
};
