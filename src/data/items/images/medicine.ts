import type { MedicineKey } from '../aic';
import BuckCapsuleA from './assets/BuckCapsule_A.webp';
import BuckCapsuleB from './assets/BuckCapsule_B.webp';
import BuckCapsuleC from './assets/BuckCapsule_C.webp';
import CannedCitromeA from './assets/CannedCitrome_A.webp';
import CannedCitromeB from './assets/CannedCitrome_B.webp';
import CannedCitromeC from './assets/CannedCitrome_C.webp';
import YazhenSprayB from './assets/Yazhen_Spray_B.webp';

export const medicineImages: Record<MedicineKey, string> = {
  buckCapsuleC: BuckCapsuleC,
  buckCapsuleB: BuckCapsuleB,
  buckCapsuleA: BuckCapsuleA,
  CannedCitromeC: CannedCitromeC,
  CannedCitromeB: CannedCitromeB,
  CannedCitromeA: CannedCitromeA,
  yazhenSprayB: YazhenSprayB,
};
