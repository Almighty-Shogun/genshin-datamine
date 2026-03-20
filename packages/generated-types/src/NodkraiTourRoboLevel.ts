import type { ObfuscatedValue } from './common';

export type NodkraiTourRoboLevel = {
    activityID: number;
    galleryId: number;
    groupLinkId: number;
    imagePath: string;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
