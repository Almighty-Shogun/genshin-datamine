import type { ObfuscatedValue } from './common';

export type EntityTouch = {
    id: number;
    monsterId: number;
} & ObfuscatedValue;
