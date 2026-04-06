import type { ObfuscatedValue } from './common';

export type BeastsBattlePKM = {
    gadgetId: number;
    hp: number;
    iconPath: string;
    id: number;
    nameTextMapHash: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
