import type { ObfuscatedValue } from './common';

export type NewActivityAvatarSelection = {
    avatarRewardList: number[];
    condId: number;
    costItemIdList: number[];
    costItemNumList: number[];
    descTextMapHash: number;
    scheduleId: number;
    trialAvatarIdList: number[];
    watcherIdList: number[];
} & ObfuscatedValue;
