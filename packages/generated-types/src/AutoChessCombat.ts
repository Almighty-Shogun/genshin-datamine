import type { ObfuscatedValue } from './common';

export type AutoChessCombat = {
    id: number;
    nameTextMapHash: number;
    rewardId: number;
    targetId: number;
    type: string;
} & ObfuscatedValue;
