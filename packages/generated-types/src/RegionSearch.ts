import type { ObfuscatedValue } from './common';

export type RegionSearch = {
    abilityGroup: string;
    id: number;
    markIconTypeName: string;
    materialId: number;
    reviseLevel: number;
    searchDescTextMapHash: number;
    searchGroupId: number;
    searchType: string;
    tutorialId: number;
} & ObfuscatedValue;
