import type { ObfuscatedValue } from './common';

export type GCGCardView = {
    cardPrefabName: string;
    cardPrefabNameSpecialB: string;
    cardStaticImageHash: number;
    goldenSkinSpinePrefabList: string[];
    goldenSkinSpinePrefabListSpecialA: string[];
    goldenSkinSpinePrefabListSpecialB: unknown[];
    historyImageHash: number;
    historySmallImageHash: number;
    id: number;
    isFirstPack: boolean;
    skinEffectJsonConfig: string;
    skinEffectJsonConfigSpecialB: string;
} & ObfuscatedValue;
