import type { ObfuscatedValue } from './common';

export type PoetryFestivalBase = {
    id: number;
    watcherList: number[];
    weaponId: number;
} & ObfuscatedValue;
