import type { ObfuscatedValue } from './common';

export type ActivityJourneyGCGPickStage = {
    hardLevelId: number;
    id: number;
    normalLevelId: number;
    unlockCond: number;
    watcherList: number[];
} & ObfuscatedValue;
