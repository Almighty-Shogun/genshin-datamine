import type { ObfuscatedValue } from './common';

export type ActivityLoliBattleLevel = {
    activityID: number;
    buffIcon: string;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    scoreLevelList: number[];
    watcherList: number[];
} & ObfuscatedValue;
