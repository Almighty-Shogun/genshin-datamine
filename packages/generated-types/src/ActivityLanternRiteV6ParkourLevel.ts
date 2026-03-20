import type { ObfuscatedValue } from './common';

export type ActivityLanternRiteV6ParkourLevel = {
    activityID: number;
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
