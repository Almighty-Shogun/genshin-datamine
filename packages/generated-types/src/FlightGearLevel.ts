import type { ObfuscatedValue } from './common';

export type FlightGearLevel = {
    galleryId: number;
    groupId: number;
    groupLinkId: number;
    levelId: number;
    scoreLevelList: number[];
    stage: number;
    watcherList: number[];
} & ObfuscatedValue;
