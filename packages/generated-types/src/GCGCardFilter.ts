import type { ObfuscatedValue } from './common';

export type GCGCardFilter = {
    filterNameTextMapHash: number;
    filterType: string;
    id: number;
    isCard: boolean;
    isChar: boolean;
    otherOptionNameTextMapHash: number;
    paramList: number[];
} & ObfuscatedValue;
