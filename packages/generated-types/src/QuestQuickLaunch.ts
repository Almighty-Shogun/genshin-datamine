import type { ObfuscatedValue } from './common';

export type QuestQuickLaunch = {
    chapterId: number;
    mainQuestId: number;
    openState: string;
    questId: number;
} & ObfuscatedValue;
