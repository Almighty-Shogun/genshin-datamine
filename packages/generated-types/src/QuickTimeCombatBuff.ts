import type { ObfuscatedValue } from './common';

export type QuickTimeCombatBuff = {
    abilityGroupName: string;
    buffId: number;
    cost: number;
    descriptionTextMapHash: number;
    iconPath: string;
} & ObfuscatedValue;
