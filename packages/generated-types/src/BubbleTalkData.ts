import type { ObfuscatedValue } from './common';

export type BubbleTalkData = {
    contentTextMapHash: number;
    delay: number;
    id: number;
    soundEffect: string;
} & ObfuscatedValue;
