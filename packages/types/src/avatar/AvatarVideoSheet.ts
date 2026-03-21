import type { ObfuscatedValue, TextMapHash } from '../common';

export type AvatarVideoSheet = {
    iconHash: number;
    id: number;
    type: "TACHIE" | "VIDEO";
} & ObfuscatedValue & Omit<TextMapHash, 'nameTextMapHash'>;
