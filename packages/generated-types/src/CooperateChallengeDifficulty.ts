import type { ObfuscatedValue } from './common';

export type CooperateChallengeDifficulty = {
    id: number;
    reviseLevelId: number;
    scoreRatio: number;
} & ObfuscatedValue;
