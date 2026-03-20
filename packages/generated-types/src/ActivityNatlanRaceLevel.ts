import type { ObfuscatedValue } from './common';

export type ActivityNatlanRaceLevel = {
    activityID: number;
    avatarIdList: number[];
    descTextMapHash: number;
    gadgetIdList: number[];
    galleryId: number;
    groupLinkId: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    pushtipsId: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
