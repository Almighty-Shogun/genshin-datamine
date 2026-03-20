import type { ObfuscatedValue } from './common';

export type ActivityCrystalLinkCondBuff = {
    abilityDescTextMapHash: number;
    abilityGroupName: string;
    abilityName: string;
    abilityTitleTextMapHash: number;
    buffId: number;
    desParam: string[];
    iconNameHash: number;
} & ObfuscatedValue;
