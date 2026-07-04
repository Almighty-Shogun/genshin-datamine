import type { ObfuscatedValue } from './common';

export type ActivityOneShotLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    groupId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: unknown[];
    trialAvatarId: number;
    watcherList: number[];
} & ObfuscatedValue;
