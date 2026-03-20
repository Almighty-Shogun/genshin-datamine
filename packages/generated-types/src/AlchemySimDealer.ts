import type { ObfuscatedValue } from './common';

export type AlchemySimDealer = {
    id: number;
    npcID: number;
    tagList: number[];
    tipsTextMapHash: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
