import type { EquipType } from './common';
import type { ObfuscatedValue } from '../common';

export type ReliquaryWearMainProp = {
    equipType: Exclude<EquipType, 'EQUIP_BRACER' | 'EQUIP_NECKLACE'>;
} & ObfuscatedValue;
