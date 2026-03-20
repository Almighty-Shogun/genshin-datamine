import type { ObfuscatedValue } from './common';

export type ActivityBubbleDramaBladeLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    monsterPreviewId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    scoreLevelList: number[];
    watcherList: number[];
} & ObfuscatedValue;
