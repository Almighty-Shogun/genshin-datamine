import type { ObfuscatedValue } from './common';

export type LanV4PushBoxLevel = {
    activityID: number;
    levelDescTextMapHash: number;
    levelIconHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
