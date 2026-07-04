import type { ObfuscatedValue } from './common';

export type AquariumDivingLevel = {
    activityID: number;
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    sceneId: number;
    watcherList: unknown[];
} & ObfuscatedValue;
