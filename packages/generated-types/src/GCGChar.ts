import type { ObfuscatedValue } from './common';

export type GCGChar = {
    cardType: string;
    characterIconHash: number;
    descTextMapHash: number;
    hp: number;
    id: number;
    isCanObtain: boolean;
    isRemoveAfterDie: boolean;
    maxEnergy: number;
    nameTextMapHash: number;
    skillList: number[];
    tagList: string[];
    voiceSwitch: string;
} & ObfuscatedValue;
