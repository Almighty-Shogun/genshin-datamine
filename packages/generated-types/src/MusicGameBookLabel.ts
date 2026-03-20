import type { ObfuscatedValue } from './common';

export type MusicGameBookLabel = {
    exclusiveId: number;
    id: number;
    nameTextMapHash: number;
    sortId: number;
} & ObfuscatedValue;
