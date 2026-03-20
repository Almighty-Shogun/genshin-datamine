import type { ObfuscatedValue } from './common';

export type AutoChessEquip = {
    desc: number[];
    iconHash: number;
    id: number;
    nameTextMapHash: number;
    rank: number;
    specialDescTextMapHash: number;
    type: number[];
} & ObfuscatedValue;
