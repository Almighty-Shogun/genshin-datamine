import type { ObfuscatedValue } from './common';

export type ActivityBomberDodocoLevel = {
    activityID: number;
    descriptionTextMapHash: number;
    dungeonId: number;
    levelID: number;
    levelImageHash: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
