import type { ObfuscatedValue } from './common';

export type ActivitySnowRaceCombatLevelData = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
