import type { ObfuscatedValue } from './common';

export type GoalChallengeBase = {
    activityID: number;
    endQuestId: number;
} & ObfuscatedValue;
