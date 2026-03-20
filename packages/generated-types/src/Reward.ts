import type { ObfuscatedValue } from './common';

export type Reward = {
    hcoin: number;
    playerExp: number;
    resin: number;
    rewardId: number;
    rewardItemList: {
        itemCount: number;
        itemId: number;
    }[];
    scoin: number;
} & ObfuscatedValue;
