import type { ObfuscatedValue } from './common';

export type ActivityTradeShowBattleLevel = {
    activityID: number;
    buffList: number[];
    descTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    medalScoreList: number[];
    monsterPreviewId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
