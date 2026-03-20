import type { ObfuscatedValue } from './common';

export type QuestBomberLevel = {
    dungeonId: number;
    levelId: number;
    pushTipsId: number;
} & ObfuscatedValue;
