import type { ObfuscatedValue } from './common';

export type ActivityNatlanDrillCollectLevel = {
    activityID: number;
    descriptionTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: number[];
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
