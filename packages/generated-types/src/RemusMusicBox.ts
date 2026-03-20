import type { ObfuscatedValue } from './common';

export type RemusMusicBox = {
    iconPath: string;
    id: number;
    lockDescTextMapHash: number;
    reminderId: number;
    rewardId: number;
    titleTextMapHash: number;
    unlockDescTextMapHash: number;
} & ObfuscatedValue;
