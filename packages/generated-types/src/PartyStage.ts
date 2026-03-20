import type { ObfuscatedValue } from './common';

export type PartyStage = {
    activityID: number;
    draftId: number;
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    rewardId: number;
    seriesId: number;
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
