import type { ObfuscatedValue } from './common';

export type BadmintonBall = {
    id: number;
    speed: number;
    type: number;
} & ObfuscatedValue;
