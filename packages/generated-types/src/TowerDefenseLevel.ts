import type { ObfuscatedValue } from './common';

export type TowerDefenseLevel = {
    activityID: number;
    dungeonId: number;
    galleryID: number;
    groupID: number;
    levelDescTextMapHash: number;
    levelID: number;
    levelType: string;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
