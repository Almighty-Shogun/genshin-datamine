import type { ObfuscatedValue } from './common';

export type ActivityLanternRiteV6DanmakuLevel = {
    activityID: number;
    chapterNameTextMapHash: number;
    levelDescTextMapHash: number;
    levelID: number;
    monsterLevel: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
