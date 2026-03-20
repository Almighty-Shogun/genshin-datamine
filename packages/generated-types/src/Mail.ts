import type { ObfuscatedValue } from './common';

export type Mail = {
    contentTextMapHash: number;
    expireDays: number;
    id: number;
    isStar: boolean;
    rewardId: number;
    senderTextMapHash: number;
    titleTextMapHash: number;
    type: string;
} & ObfuscatedValue;
