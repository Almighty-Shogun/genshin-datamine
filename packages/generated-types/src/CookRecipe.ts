import type { ObfuscatedValue } from './common';

export type CookRecipe = {
    cookMethod: string;
    descTextMapHash: number;
    effectDesc: number[];
    foodType: string;
    icon: string;
    id: number;
    isDefaultUnlocked: boolean;
    maxProficiency: number;
    nameTextMapHash: number;
    qteParam: string;
    qteQualityWeightVec: number[];
    rankLevel: number;
} & ObfuscatedValue;
