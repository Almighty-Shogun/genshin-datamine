import type { ObfuscatedValue } from './common';

export type TribalReputationQuest = {
    iconName: string;
    order: number;
    parentQuestId: number;
    rewardId: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
