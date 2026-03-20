import type { ObfuscatedValue } from './common';

export type LanV4PartyLionLevel = {
    activityID: number;
    draftId: number;
    dungeonId: number;
    galleryId: number;
    groupId: number;
    levelDescTextMapHash: number;
    levelID: number;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    pushtipsId: number;
    questList: number[];
    seriesId: number;
    watcherList: unknown[];
} & ObfuscatedValue;
