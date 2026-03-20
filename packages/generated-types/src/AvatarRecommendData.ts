import type { ObfuscatedValue } from './common';

export type AvatarRecommendData = {
    avatarId: number;
    elementType: string;
    talents: number[];
} & ObfuscatedValue;
