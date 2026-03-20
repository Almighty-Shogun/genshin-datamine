import type { ObfuscatedValue } from './common';

export type QuickTimeCombatStage = {
    buffIdList: number[];
    dungeonId: number;
    levelDescriptionTextMapHash: number;
    levelTitleTextMapHash: number;
    pushTipsID: number;
    stageId: number;
    trialAvatarIdList: number[];
    unlockTime: number;
    watcherList: number[];
} & ObfuscatedValue;
