import type { ObfuscatedValue } from './common';

export type ActivityMvm2Pvp = {
    activityID: number;
    dungeonId: number;
    levelID: number;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: unknown[];
} & ObfuscatedValue;
