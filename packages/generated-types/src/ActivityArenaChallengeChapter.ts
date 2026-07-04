import type { ObfuscatedValue } from './common';

export type ActivityArenaChallengeChapter = {
    chapterEndQuestId: number;
    chapterId: number;
    chapterQuestTitleTextMapHash: number;
    chapterStartDay: number;
    chapterStartQuestId: number;
} & ObfuscatedValue;
