import type { ObfuscatedValue } from './common';

export type BartenderFormula = {
    availableAffixList: number[];
    blurredDescTextMapHash: number;
    descTextMapHash: number;
    id: number;
    lockType: number;
    mixingState: string;
    nameTextMapHash: number;
    type: number;
} & ObfuscatedValue;
