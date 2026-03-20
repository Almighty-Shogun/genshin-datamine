import type { ObfuscatedValue } from './common';

export type NatlanArenaLevel = {
    activityID: number;
    bossDescTextMapHash: number;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
