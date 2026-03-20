import type { ObfuscatedValue } from './common';

export type MagicStorybookChapter = {
    id: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
