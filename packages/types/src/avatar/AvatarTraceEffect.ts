import type { ObfuscatedValue, TextMapHash } from '../common';

export type AvatarTraceEffect = {
    avatarId: number;
    hide: false;
    itemId: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
