import type { ObfuscatedValue } from './common';

export type ActivityBirdPinBallLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    levelType: string;
    nameTextMapHash: number;
    openDay: number;
    prefabPath: string;
    pushTipsId: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
