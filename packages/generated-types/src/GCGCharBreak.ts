import type { ObfuscatedValue } from './common';

export type GCGCharBreak = {
    breakLevel: number;
    cardType: string;
    descTextMapHash: number;
    id: number;
    isCanObtain: boolean;
    maxEnergy: number;
    nameTextMapHash: number;
    skillList: number[];
    tagList: string[];
} & ObfuscatedValue;
