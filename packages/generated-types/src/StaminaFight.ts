import type { ObfuscatedValue } from './common';

export type StaminaFight = {
    dungeonId: number;
    id: number;
    levelDescTextMapHash: number;
    levelIconHash: number;
    levelTitleTextMapHash: number;
    openDay: number;
    scheduleId: number;
    watcherList: number[];
} & ObfuscatedValue;
