import type { ObfuscatedValue } from './common';

export type AutoChessTag = {
    icon: string;
    id: number;
    titleTextMapHash: number;
    type: string;
} & ObfuscatedValue;
