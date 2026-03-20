import type { ObfuscatedValue } from './common';

export type MusicGameBookMod = {
    descTextMapHash: number;
    id: number;
    nameTextMapHash: number;
    triggerType: string;
} & ObfuscatedValue;
