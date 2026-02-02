import type { BatteryKey } from '../aic';
import LCValleyBattery from './assets/LC_Valley_Battery.png';
import SCValleyBattery from './assets/SC_Valley_Battery.png';
import HCValleyBattery from './assets/HC_Valley_Battery.png';

export const batteryImages: Record<BatteryKey, string> = {
  batteryValleyLc: LCValleyBattery,
  batteryValleySc: SCValleyBattery,
  batteryValleyHc: HCValleyBattery,
};
