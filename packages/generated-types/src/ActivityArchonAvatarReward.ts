import type { ObfuscatedValue } from './common';

export type ActivityArchonAvatarReward = {
    avatarId: number;
    rewardId: number;
    titleTextMapHash: number;
    watcherId: number;
} & ObfuscatedValue;
