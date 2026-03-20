import type { ObfuscatedValue } from './common';

export type AutoChessRoute = {
    chapterNameTextMapHash: number;
    chapterTitleTextMapHash: number;
    id: number;
} & ObfuscatedValue;
