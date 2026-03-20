import type { ObfuscatedValue } from './common';

export type Saurus1V3Level = {
    levelId: number;
    levelNameTextMapHash: number;
    monsterPreviewId: number;
    pushtipsId: number;
    trialAvatarId: number;
} & ObfuscatedValue;
