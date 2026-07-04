import type { ObfuscatedValue } from './common';

export type LoadingCustom = {
    dungeonID: number;
    enterReason: number;
    id: number;
    perfabPath: string;
} & ObfuscatedValue;
