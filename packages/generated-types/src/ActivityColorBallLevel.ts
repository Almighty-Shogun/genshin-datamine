import type { ObfuscatedValue } from './common';

export type ActivityColorBallLevel = {
    activityID: number;
    descTextMapHash: number;
    draftId: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    levelImagePath: string;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
