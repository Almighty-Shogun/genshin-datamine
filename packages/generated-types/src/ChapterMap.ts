import type { ObfuscatedValue } from './common';

export type ChapterMap = {
    id: number;
    param: string;
    type: string;
} & ObfuscatedValue;
