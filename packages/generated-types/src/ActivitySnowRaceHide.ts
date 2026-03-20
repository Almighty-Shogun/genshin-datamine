import type { ObfuscatedValue } from './common';

export type ActivitySnowRaceHide = {
    activityID: number;
    descTextMapHash: number;
    draftID: number;
    id: number;
    matchID: number;
    minimapScale: number;
    pushtipsId: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
