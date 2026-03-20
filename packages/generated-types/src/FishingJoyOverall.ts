import type { ObfuscatedValue } from './common';

export type FishingJoyOverall = {
    dungeonId: number;
    scheduleId: number;
    watcherList: number[];
} & ObfuscatedValue;
