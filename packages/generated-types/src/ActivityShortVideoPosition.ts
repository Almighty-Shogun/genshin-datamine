import type { ObfuscatedValue } from './common';

export type ActivityShortVideoPosition = {
    id: number;
    picName: string;
    position: number[];
    titleTextMapHash: number;
} & ObfuscatedValue;
