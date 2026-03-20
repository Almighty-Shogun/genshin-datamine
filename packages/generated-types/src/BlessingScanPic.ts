import type { ObfuscatedValue } from './common';

export type BlessingScanPic = {
    grantRewardCost: number;
    iconName: string;
    id: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
