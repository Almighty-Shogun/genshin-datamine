import type { ObfuscatedValue } from './common';

export type AlchemySimOrder = {
    id: number;
    tagList: number[];
    tipsTextMapHash: number;
} & ObfuscatedValue;
