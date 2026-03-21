import type { EquipType } from './common';
import type { ObfuscatedValue } from '../common';

export type ReliquaryWearMainProp = {
    equipType: Omit<EquipType, 'EQUIP_BRACER' | 'EQUIP_NECKLACE'>;
} & ObfuscatedValue;
