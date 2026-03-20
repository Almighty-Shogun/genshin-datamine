import type { ObfuscatedValue } from './common';

export type GachaRestrictConfigData = {
    gachaType: number;
    generalDisplayCount: number;
} & ObfuscatedValue;
