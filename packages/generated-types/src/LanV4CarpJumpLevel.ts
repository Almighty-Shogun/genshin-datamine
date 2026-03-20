import type { ObfuscatedValue } from './common';

export type LanV4CarpJumpLevel = {
    activityID: number;
    galleryId: number;
    groupBundleID: number;
    levelDescTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
