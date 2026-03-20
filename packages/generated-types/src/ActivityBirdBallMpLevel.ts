import type { ObfuscatedValue } from './common';

export type ActivityBirdBallMpLevel = {
    activityID: number;
    descTextMapHash: number;
    draftId: number;
    dungeonId: number;
    groupId: number;
    levelID: number;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    prefabPath: string;
    questList: unknown[];
    seriesId: number;
    watcherList: unknown[];
} & ObfuscatedValue;
