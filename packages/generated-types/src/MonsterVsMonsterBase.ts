import type { ObfuscatedValue } from './common';

export type MonsterVsMonsterBase = {
    activityID: number;
    endQuestId: number;
    watcherList: number[];
} & ObfuscatedValue;
