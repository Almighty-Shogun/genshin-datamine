import type { ObfuscatedValue } from './common';

export type BrickBreakerInfo = {
    brickDescTextMapHash: number;
    brickNameTextMapHash: number;
    id: number;
    levelIconHash: number;
} & ObfuscatedValue;
