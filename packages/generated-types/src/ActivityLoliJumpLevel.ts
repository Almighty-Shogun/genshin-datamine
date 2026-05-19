import type { ObfuscatedValue } from './common';

export type ActivityLoliJumpLevel = {
    activityID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    prefabPath: string;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
