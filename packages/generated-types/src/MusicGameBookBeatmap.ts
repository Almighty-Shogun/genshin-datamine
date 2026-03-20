import type { ObfuscatedValue } from './common';

export type MusicGameBookBeatmap = {
    id: number;
    jsonPath: string;
    rewardIdList: number[];
} & ObfuscatedValue;
