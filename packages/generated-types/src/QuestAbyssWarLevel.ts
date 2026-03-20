import type { ObfuscatedValue } from './common';

export type QuestAbyssWarLevel = {
    buffDescTextMapHash: number;
    descTextMapHash: number;
    isTransport: boolean;
    levelId: number;
    levelType: string;
    markID: number;
    nameTextMapHash: number;
    pictureHash: number;
    reminderID: number;
} & ObfuscatedValue;
