import type { ObfuscatedValue } from './common';

export type GCGRuleText = {
    detailIdList: number[];
    gameType: string;
    id: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
