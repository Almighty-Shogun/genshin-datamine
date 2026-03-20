import type { ObfuscatedValue } from './common';

export type AvatarTraceEffect = {
    avatarId: number;
    descTextMapHash: number;
    hide: boolean;
    itemId: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
