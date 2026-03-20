import type { ObfuscatedValue } from './common';

export type ActivityBubbleDramaDrinkLevel = {
    activityID: number;
    descTextMapHash: number;
    dungeonId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    parentQuestId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
