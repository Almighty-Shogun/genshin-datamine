import type { ObfuscatedValue } from './common';

export type AvatarVideoSheet = {
    descTextMapHash: number;
    iconHash: number;
    id: number;
    titleTextMapHash: number;
    type: string;
} & ObfuscatedValue;
