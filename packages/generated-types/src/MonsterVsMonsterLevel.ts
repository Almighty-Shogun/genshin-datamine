import type { ObfuscatedValue } from './common';

export type MonsterVsMonsterLevel = {
    activityID: number;
    dungeonID: number;
    galleryID: number;
    levelDescTextMapHash: number;
    levelID: number;
    levelNameTextMapHash: number;
    levelType: string;
    nameTextMapHash: number;
    openDay: number;
    pushTipsID: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
