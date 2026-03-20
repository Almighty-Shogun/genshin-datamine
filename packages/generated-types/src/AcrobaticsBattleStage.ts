import type { ObfuscatedValue } from './common';

export type AcrobaticsBattleStage = {
    dayIndex: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelNameTextMapHash: number;
    stageId: number;
    trialAvatarIdList: number[];
    watcherList: number[];
} & ObfuscatedValue;
