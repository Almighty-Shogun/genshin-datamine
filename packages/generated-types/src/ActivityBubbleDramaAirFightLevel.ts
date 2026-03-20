import type { ObfuscatedValue } from './common';

export type ActivityBubbleDramaAirFightLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    scoreLevelList: number[];
    watcherList: number[];
} & ObfuscatedValue;
