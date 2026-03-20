import type { ObfuscatedValue } from './common';

export type InspirationSpurtLevel = {
    dungeonId: number;
    levelId: number;
    titleTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
