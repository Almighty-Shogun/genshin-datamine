import type { ObfuscatedValue } from './common';

export type ActivityTradeShowStgLevel = {
    activityID: number;
    dungeonID: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
