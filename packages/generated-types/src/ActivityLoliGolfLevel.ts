import type { ObfuscatedValue } from './common';

export type ActivityLoliGolfLevel = {
    activityID: number;
    dungeonId: number;
    gadgetIdList: number[];
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    trialAvatarId: number;
    watcherList: number[];
} & ObfuscatedValue;
