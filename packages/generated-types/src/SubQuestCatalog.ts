import type { ObfuscatedValue } from './common';

export type SubQuestCatalog = {
    descTextMapHash: number;
    id: number;
    showCond: {
        param: number;
        type: string;
    }[];
    showLogic: string;
} & ObfuscatedValue;
