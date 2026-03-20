import type { ObfuscatedValue } from './common';

export type BonusActivityClient = {
    avatarConfigId: number;
    bonusActivityType: string;
    id: number;
    openPlayerLevel: number;
    perfabPath: string;
    questId: number;
    unlockTipsTextMapHash: number;
    voiceIndexList: number[];
} & ObfuscatedValue;
