import type { ObfuscatedValue } from './common';

export type AquariumDivingTask = {
    preQuestId: number;
    questId: number;
    stageId: number;
    taskType: string;
} & ObfuscatedValue;
