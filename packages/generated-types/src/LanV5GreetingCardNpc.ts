import type { ObfuscatedValue } from './common';

export type LanV5GreetingCardNpc = {
    id: number;
    markDescTextMapHash: number;
    markTitleTextMapHash: number;
    preQuestId: number;
} & ObfuscatedValue;
