import type { ObfuscatedValue } from './common';

export type BomberV3Level = {
    activityID: number;
    draftId: number;
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    previewMonsterList: number[];
    questList: unknown[];
    seriesId: number;
    watcherList: number[];
} & ObfuscatedValue;
