import type { ObfuscatedValue } from './common';

export type ActivityCeremonyDoodleLevel = {
    activityID: number;
    descTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
