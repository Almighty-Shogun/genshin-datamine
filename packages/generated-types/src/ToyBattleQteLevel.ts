import type { ObfuscatedValue } from './common';

export type ToyBattleQteLevel = {
    activityID: number;
    jsonName: string;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
