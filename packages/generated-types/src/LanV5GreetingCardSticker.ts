import type { ObfuscatedValue } from './common';

export type LanV5GreetingCardSticker = {
    descTextMapHash: number;
    height: number;
    id: number;
    nameTextMapHash: number;
    order: number;
    prefabName: string;
    tagList: string[];
    unlockCond: string;
} & ObfuscatedValue;
