import type { ObfuscatedValue } from './common';

export type ProductCardDetailConfigData = {
    cardProductType: string;
    configId: number;
    dailyRewardTextTextMapHash: number;
    days: number;
    explainTitleTextMapHash: number;
    hcoinPerDay: number;
    icon: string;
    itemNameTextMapHash: number;
    mcoinBase: number;
    priceTier: string;
    remainDaysTextTextMapHash: number;
    replaceMcoinNum: number;
    shopType: string;
    sortLevel: number;
    totalDaysTextTextMapHash: number;
    totalLimitDays: number;
} & ObfuscatedValue;
