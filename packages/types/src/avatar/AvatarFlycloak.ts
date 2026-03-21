import type { ObfuscatedValue, TextMapHash } from '../common';

export type AvatarFlycloak = {
    hide: boolean;
    icon: string;
    jsonName: string;
    prefabPath: string;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
