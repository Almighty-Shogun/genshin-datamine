import type { ObfuscatedValue } from './common';

export type AutoChessAction = {
    id: number;
    rewardId: number;
    rewardType: string;
} & ObfuscatedValue;
