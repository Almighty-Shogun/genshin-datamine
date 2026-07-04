import type { Element, ObfuscatedValue } from '../common';

export type AvatarRecommendData = {
    avatarId: number;
    elementType: Element;
    talents: number[];
} & ObfuscatedValue;
