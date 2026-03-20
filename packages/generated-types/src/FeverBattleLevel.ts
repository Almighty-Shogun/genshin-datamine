import type { ObfuscatedValue } from './common';

export type FeverBattleLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    medalScoreList: number[];
    monsterPreviewId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
