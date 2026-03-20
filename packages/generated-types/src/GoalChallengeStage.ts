import type { ObfuscatedValue } from './common';

export type GoalChallengeStage = {
    buffId: number;
    dungeonId: number;
    id: number;
    levelDescTextMapHash: number;
    levelTitleTextMapHash: number;
    openDay: number;
    trialAvatarList: number[];
} & ObfuscatedValue;
