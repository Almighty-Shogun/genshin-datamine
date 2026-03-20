import type { ObfuscatedValue } from './common';

export type SlimeCannonLevel = {
    activityID: number;
    dungeonId: number;
    guideName: string;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushtipsId: number;
    questList: number[];
    tipsTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
