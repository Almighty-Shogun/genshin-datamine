import type { ObfuscatedValue } from './common';

export type MusicPartyLevel = {
    groupId: number;
    levelDescTextMapHash: number;
    levelId: number;
    levelNameTextMapHash: number;
    musicId: number;
    pushtipsId: number;
} & ObfuscatedValue;
