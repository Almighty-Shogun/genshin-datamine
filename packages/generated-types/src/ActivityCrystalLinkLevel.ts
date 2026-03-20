import type { ObfuscatedValue } from './common';

export type ActivityCrystalLinkLevel = {
    condCD: number;
    dungeonId: number;
    effLastTime: number;
    levelDescTextMapHash: number;
    levelId: number;
    levelTitleTextMapHash: number;
    openDay: number;
    scheduleId: number;
    scoreLevelList: number[];
    trialAvatarList: number[];
    watcherIdList: number[];
} & ObfuscatedValue;
