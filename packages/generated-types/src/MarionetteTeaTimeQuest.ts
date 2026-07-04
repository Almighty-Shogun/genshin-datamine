import type { ObfuscatedValue } from './common';

export type MarionetteTeaTimeQuest = {
    avatarId: number;
    parentQuestId: number;
    startQuestId: number;
} & ObfuscatedValue;
