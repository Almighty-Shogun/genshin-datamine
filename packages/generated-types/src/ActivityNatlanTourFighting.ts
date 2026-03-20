import type { ObfuscatedValue } from './common';

export type ActivityNatlanTourFighting = {
    activityID: number;
    id: number;
    levelDescTextMapHash: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
