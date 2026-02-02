import type { OreKey } from '../natural';
import Carbon from './assets/Carbon.png';
import OriginiumOre from './assets/Originium_Ore.png';
import AmethystOre from './assets/Amethyst_Ore.png';
import FerriumOre from './assets/Ferrium_Ore.png';

export const oreImages: Record<OreKey | 'carbon', string> = {
  originiumOre: OriginiumOre,
  amethystOre: AmethystOre,
  ferriumOre: FerriumOre,
  carbon: Carbon,
};
