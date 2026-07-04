import type { ObfuscatedValue } from './common';

export type AvatarEnhanceTopic = {
    avatarId: number;
    questDescTextMapHash: number;
    questId: number;
    questTitleTextMapHash: number;
    skillId: number;
    skillNameTextMapHash: number;
    sortId: number;
} & ObfuscatedValue;
