import type { ObfuscatedValue } from './common';

export type AnimalCodex = {
    countType: string;
    describeId: number;
    descTextMapHash: number;
    id: number;
    isDisuse: boolean;
    isSeenActive: boolean;
    modelPath: string;
    pushTipsCodexId: number;
    showOnlyUnlocked: boolean;
    sortOrder: number;
    subType: string;
    type: string;
} & ObfuscatedValue;
