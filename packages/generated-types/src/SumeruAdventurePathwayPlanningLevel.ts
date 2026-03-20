import type { ObfuscatedValue } from './common';

export type SumeruAdventurePathwayPlanningLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    limitTime: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
