import type { ObfuscatedValue } from './common';

export type CharMasterLevel = {
    avatarId: number;
    dungeonId: number;
    iconHash: number;
    levelId: number;
    monsterPreviewId: number;
    titleTextMapHash: number;
    trialAvatarIdList: number[];
} & ObfuscatedValue;
