import type { ObfuscatedValue } from './common';

export type ActivityArchonBanner = {
    activityId: number;
    avatarRewardList: number[];
    descTextMapHash: number;
    iconPath: string;
    imagePath: string;
    prefabPath: string;
    titleTextMapHash: number;
} & ObfuscatedValue;
