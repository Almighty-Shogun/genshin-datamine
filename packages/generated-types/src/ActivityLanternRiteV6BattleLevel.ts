import type { ObfuscatedValue } from './common';

export type ActivityLanternRiteV6BattleLevel = {
    activityID: number;
    buffIdList: number[];
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    levelType: string;
    monsterPreviewId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    targetScoreList: number[];
    watcherList: number[];
} & ObfuscatedValue;
