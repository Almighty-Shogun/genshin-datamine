import type { ObfuscatedValue } from './common';

export type ToyBattleCurrentLevel = {
    activityID: number;
    galleryID: number;
    groupLinkID: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsID: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
