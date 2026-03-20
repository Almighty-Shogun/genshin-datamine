import type { ObfuscatedValue } from './common';

export type Combine = {
    combineId: number;
    combineType: number;
    dropId: number;
    effectDescTextMapHash: number;
    isDefaultShow: boolean;
    materialItems: {
        count: number;
        id: number;
    }[];
    playerLevel: number;
    randomItems: {
        count: number;
        itemId: number;
        weight: number;
    }[];
    recipeType: string;
    resultItemCount: number;
    resultItemId: number;
    scoinCost: number;
    subCombineType: number;
} & ObfuscatedValue;
