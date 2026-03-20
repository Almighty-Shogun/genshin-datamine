import type { ObfuscatedValue } from './common';

export type SumeruAdventureParkourLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    groupLinkId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
