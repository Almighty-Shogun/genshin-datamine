import type { ObfuscatedValue } from './common';

export type ActivityPotionStage = {
    buffIdList: number[];
    dungeonEntryID: number;
    levelIdList: number[];
    openDay: number;
    stageId: number;
    titleTextMapHash: number;
    trialAvatarList: number[];
    watcherIdList: number[];
} & ObfuscatedValue;
