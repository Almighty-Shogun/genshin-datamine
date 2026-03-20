import type { ObfuscatedValue } from './common';

export type BoltbugAbyssLevel = {
    activityID: number;
    galleryId: number;
    groupId: number;
    groupLinkId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    trialAvatarId: number;
    watcherList: number[];
} & ObfuscatedValue;
