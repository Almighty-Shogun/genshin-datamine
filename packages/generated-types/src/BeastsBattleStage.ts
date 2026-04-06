import type { ObfuscatedValue } from './common';

export type BeastsBattleStage = {
    id: number;
    stageNameTextMapHash: number;
    subQuestId: number;
} & ObfuscatedValue;
