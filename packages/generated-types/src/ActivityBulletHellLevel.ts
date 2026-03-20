import type { ObfuscatedValue } from './common';

export type ActivityBulletHellLevel = {
    activityID: number;
    descriptionTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    trialAvatarList: number[];
    watcherList: number[];
} & ObfuscatedValue;
