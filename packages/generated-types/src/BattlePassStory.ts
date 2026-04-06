import type { ObfuscatedValue } from './common';

export type BattlePassStory = {
    id: number;
    storyId: number[];
    storyUnlockLevel: number[];
} & ObfuscatedValue;
