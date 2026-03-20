import type { ObfuscatedValue } from './common';

export type AutoChessEvent = {
    iconHash: number;
    id: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
