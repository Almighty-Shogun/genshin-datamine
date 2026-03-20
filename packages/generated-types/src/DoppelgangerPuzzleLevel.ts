import type { ObfuscatedValue } from './common';

export type DoppelgangerPuzzleLevel = {
    activityID: number;
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
