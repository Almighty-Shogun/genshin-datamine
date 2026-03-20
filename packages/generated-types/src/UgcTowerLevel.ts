import type { ObfuscatedValue } from './common';

export type UgcTowerLevel = {
    descParam: string[];
    gadgetId: number;
    id: number;
    level: number;
} & ObfuscatedValue;
