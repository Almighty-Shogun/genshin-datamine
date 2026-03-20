import type { ObfuscatedValue } from './common';

export type ToyBattleCampLevel = {
    activityID: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
