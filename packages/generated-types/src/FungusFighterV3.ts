import type { ObfuscatedValue } from './common';

export type FungusFighterV3 = {
    dayIndex: number;
    dungeonId: number;
    finishPushTaskId: number;
    galleryId: number;
    isGuideLevel: boolean;
    levelBannerSubTitleTextMapHash: number;
    levelDescTextMapHash: number;
    levelId: number;
    levelNameTextMapHash: number;
    levelStatusDescTextMapHash: number;
    postQuestId: number;
    preLevelId: number;
    preQuestId: number;
    watcherList: number[];
} & ObfuscatedValue;
