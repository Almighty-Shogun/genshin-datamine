import type { ObfuscatedValue } from './common';

export type DreamSwitchingLevel = {
    activityID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
