import type { ObfuscatedValue } from './common';

export type CooperateChallengeLevel = {
    baseScore: number;
    levelDescTextMapHash: number;
    levelGroupId: number;
    levelID: number;
    levelTitleTextMapHash: number;
    levelType: string;
    monsterPreviewId: number;
} & ObfuscatedValue;
