import type { ObfuscatedValue } from './common';

export type FishPool = {
    abilityGroup: string;
    cityId: number;
    dailyLimitNum: number;
    dropIdList: number[];
    excludeFish: number[];
    id: number;
    maxNum: number;
    poolDescTextMapHash: number;
    poolNameTextMapHash: number;
    stockGuarantee: ObfuscatedValue;
    stockLimitList: ObfuscatedValue[];
    stockList: number[];
    teamAbilityGroup: string;
} & ObfuscatedValue;
