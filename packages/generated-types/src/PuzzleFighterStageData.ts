import type { ObfuscatedValue } from './common';

export type PuzzleFighterStageData = {
    difficultyLevel: number;
    levelId: number;
    levelType: string;
    score: number;
    unlockDay: number;
} & ObfuscatedValue;
