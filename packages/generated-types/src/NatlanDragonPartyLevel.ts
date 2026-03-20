import type { ObfuscatedValue } from './common';

export type NatlanDragonPartyLevel = {
    activityID: number;
    descTextMapHash: number;
    draftId: number;
    dungeonId: number;
    galleryId: number;
    groupId: number;
    levelID: number;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: unknown[];
    seriesId: number;
    watcherList: number[];
} & ObfuscatedValue;
