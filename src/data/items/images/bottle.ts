import type { BottledSolutionKey, BottleKey, SolutionKey } from '../aic';
import AmethystBottle from './assets/Amethyst_Bottle.png';
import CrystonBottle from './assets/Cryston_Bottle.png';
import FerriumBottledYazhenSolution from './assets/Ferrium_Bottle_Yazhen_Solution.webp';
import FerriumBottle from './assets/Ferrium_Bottle.png';
import SteelBottle from './assets/Steel_Bottle.png';
import YazhenSolution from './assets/Yazhen_Solution.png';

export const bottleImages: Record<BottleKey, string> = {
  amethystBottle: AmethystBottle,
  crystonBottle: CrystonBottle,
  ferriumBottle: FerriumBottle,
  steelBottle: SteelBottle,
};

export const solutionImages: Record<SolutionKey, string> = {
  yazhenSolution: YazhenSolution,
};

export const bottledSolutionImages: Record<BottledSolutionKey, string> = {
  ferriumBottleYazhenSolution: FerriumBottledYazhenSolution,
};
