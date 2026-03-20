import type { ObfuscatedValue } from './common';

export type RainbowPrinceBattleLevel = {
    activityID: number;
    dungeonID: number;
    galleryID: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
