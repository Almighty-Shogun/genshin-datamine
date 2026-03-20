import type { ObfuscatedValue } from './common';

export type MusicGameBookTitle = {
    id: number;
    score: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
