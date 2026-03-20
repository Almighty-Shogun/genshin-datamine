import type { ObfuscatedValue } from './common';

export type BoxMatchBoxer = {
    abilityStatesBanSkill: string[];
    animatorParamBanSkill: string;
    skillCD: number;
    skillDescTextMapHash: number;
    skillIconPath: string;
    skillNameTextMapHash: number;
} & ObfuscatedValue;
