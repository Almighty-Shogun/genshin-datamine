import type { ObfuscatedValue } from './common';

export type ActivityGearLevel = {
    id: number;
    levelNameTextMapHash: number;
    watcherID: number;
} & ObfuscatedValue;
