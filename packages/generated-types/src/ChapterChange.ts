import type { ObfuscatedValue } from './common';

export type ChapterChange = {
    chapterId: number;
    chapterImageHash: number;
    chapterImageTitleTextMapHash: number;
    chapterNumTextMapHash: number;
    chapterTitleTextMapHash: number;
    cityId: number;
    icon: string;
    id: number;
} & ObfuscatedValue;
