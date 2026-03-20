import type { ObfuscatedValue } from './common';

export type WorldLevel = {
    level: number;
    monsterLevel: number;
} & ObfuscatedValue;
