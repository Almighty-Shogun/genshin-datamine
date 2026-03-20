import type { ObfuscatedValue } from './common';

export type PersonalLine = {
    avatarId: number;
    chapterId: number;
    descTextMapHash: number;
    id: number;
    preQuestId: number[];
    rewardPreviewId: number;
    sortOrder: number;
    startQuestId: number;
    startTime: string;
    titleTextMapHash: number;
} & ObfuscatedValue;
