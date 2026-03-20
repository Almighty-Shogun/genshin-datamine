import type { ObfuscatedValue } from './common';

export type TribalQuestChapter = {
    avatarId: number;
    chapterId: number;
    chapterNumTextMapHash: number;
    groupId: number;
    guideQuestId: number;
    id: number;
} & ObfuscatedValue;
