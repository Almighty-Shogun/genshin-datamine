import type { ObfuscatedValue } from './common';

export type ActivityShopSheet = {
    cond: {
        param: number[];
        type: string;
    }[];
    condComb: string;
    id: number;
    isAheadPreview: boolean;
    sheetNameTextMapHash: number;
    showNewMark: boolean;
} & ObfuscatedValue;
