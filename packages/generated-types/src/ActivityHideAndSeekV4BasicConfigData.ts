import type { ObfuscatedValue } from './common';

export type ActivityHideAndSeekV4BasicConfigData = {
    activityID: number;
    chanllengeList: number[];
    descTextMapHash: number;
    draftID: number;
    id: number;
    mapList: number[];
    matchID: number;
    minimapScale: number;
    pushTipsID: number;
    scoreUnlockList: number[];
    skillList: number[];
    titleTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
