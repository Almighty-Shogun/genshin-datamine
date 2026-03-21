import type { ObfuscatedValue } from '../common';

export type RewardItem = {
    itemCount: number;
    itemId: number;
};

export type Reward = {
    hcoin: number;
    playerExp: number;
    resin: number;
    rewardId: number;
    rewardItemList: RewardItem[];
    scoin: number;
} & ObfuscatedValue;
