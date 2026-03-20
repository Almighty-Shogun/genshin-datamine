import type { ObfuscatedValue } from './common';

export type ProductCardDetailConfigData = {
    cardProductType: string;
    configId: number;
    dailyRewardTextTextMapHash: number;
    days: number;
    explainDescTextMapHash: number;
    explainTitleTextMapHash: number;
    firstRewardTextTextMapHash: number;
    hcoinPerDay: number;
    icon: string;
    itemNameTextMapHash: number;
    mcoinBase: number;
    priceTier: string;
    remainDaysText2TextMapHash: number;
    remainDaysTextTextMapHash: number;
    replaceMcoinNum: number;
    shopType: string;
    sortLevel: number;
    totalDaysTextTextMapHash: number;
    totalLimitDays: number;
    totalRewardTextTextMapHash: number;
} & ObfuscatedValue;
