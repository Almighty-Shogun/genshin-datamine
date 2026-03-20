import type { ObfuscatedValue } from './common';

export type ThemeParkSimAvatarQuest = {
    chapterId: number;
    characterIconHash: number;
    descTextMapHash: number;
    finishTalkId: number;
    id: number;
    nameTextMapHash: number;
    npcId: number;
    rewardType: string;
    titleTextMapHash: number;
} & ObfuscatedValue;
