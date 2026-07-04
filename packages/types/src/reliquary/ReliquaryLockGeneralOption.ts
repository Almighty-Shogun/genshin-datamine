import type { EquipType } from './common';
import type { ObfuscatedValue } from '../common';

export type ReliquaryLockGeneralOption = {
    equipType: "EQUIP_NONE" | Exclude<EquipType, 'EQUIP_BRACER' | 'EQUIP_NECKLACE' | 'EQUIP_SHOES'>;
    id: number;
} & ObfuscatedValue;
