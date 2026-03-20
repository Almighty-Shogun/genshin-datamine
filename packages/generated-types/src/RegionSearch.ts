import type { ObfuscatedValue } from './common';

export type RegionSearch = {
    abilityGroup: string;
    id: number;
    markIconTypeName: string;
    materialId: number;
    reviseLevel: number;
    searchCompleteTextMapHash: number;
    searchDescTextMapHash: number;
    searchGroupId: number;
    searchNameTextMapHash: number;
    searchType: string;
    tutorialId: number;
} & ObfuscatedValue;
