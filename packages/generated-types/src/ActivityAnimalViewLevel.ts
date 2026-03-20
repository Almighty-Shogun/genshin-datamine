import type { ObfuscatedValue } from './common';

export type ActivityAnimalViewLevel = {
    avatarId: number;
    galleryId: number;
    groupLinkId: number;
    id: number;
    levelTitleTextMapHash: number;
    openDay: number;
    watcherId: number;
} & ObfuscatedValue;
