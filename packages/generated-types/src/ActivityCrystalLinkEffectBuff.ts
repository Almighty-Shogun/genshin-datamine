import type { ObfuscatedValue } from './common';

export type ActivityCrystalLinkEffectBuff = {
    abilityDescTextMapHash: number;
    abilityGroupName: string;
    abilityName: string;
    abilityTitleTextMapHash: number;
    buffId: number;
    desParam: string[];
    gvName: string;
    iconNameHash: number;
} & ObfuscatedValue;
