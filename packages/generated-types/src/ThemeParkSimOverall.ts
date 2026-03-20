import type { ObfuscatedValue } from './common';

export type ThemeParkSimOverall = {
    scheduleId: number;
    watcherList: number[];
    weaponId: number;
} & ObfuscatedValue;
