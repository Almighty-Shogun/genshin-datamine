import type { ObfuscatedValue } from './common';

export type ActivityFairyTalesCurrentLevel = {
    activityID: number;
    galleryId: number;
    groupLinkId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
