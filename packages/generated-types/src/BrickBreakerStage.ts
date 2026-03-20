import type { ObfuscatedValue } from './common';

export type BrickBreakerStage = {
    dungeonLevel: number;
    id: number;
    openDay: number;
    worldWatcher: unknown[][];
} & ObfuscatedValue;
