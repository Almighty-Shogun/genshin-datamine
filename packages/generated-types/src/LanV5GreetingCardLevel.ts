import type { ObfuscatedValue } from './common';

export type LanV5GreetingCardLevel = {
    id: number;
    openDay: number;
    questId: number;
    watcherId: number;
} & ObfuscatedValue;
