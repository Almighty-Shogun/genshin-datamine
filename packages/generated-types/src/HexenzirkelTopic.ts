import type { ObfuscatedValue } from './common';

export type HexenzirkelTopic = {
    avatarId: number;
    questDescTextMapHash: number;
    questId: number;
    questTitleTextMapHash: number;
    skillId: number;
    skillNameTextMapHash: number;
    sortId: number;
} & ObfuscatedValue;
