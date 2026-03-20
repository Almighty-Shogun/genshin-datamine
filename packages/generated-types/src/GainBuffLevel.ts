import type { ObfuscatedValue } from './common';

export type GainBuffLevel = {
    activityID: number;
    dungeonId: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
