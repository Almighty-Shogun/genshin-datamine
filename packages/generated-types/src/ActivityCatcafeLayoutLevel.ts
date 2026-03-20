import type { ObfuscatedValue } from './common';

export type ActivityCatcafeLayoutLevel = {
    catId: number;
    descTextMapHash: number;
    groupId: number;
    levelId: number;
    order: number;
    titleTextMapHash: number;
    unlockDay: number;
} & ObfuscatedValue;
