import type { ObfuscatedValue } from './common';

export type ActivityAutoTimeStopLevel = {
    activityID: number;
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    trialAvatarList: number[];
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
