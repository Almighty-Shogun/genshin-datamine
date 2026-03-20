import type { ObfuscatedValue } from './common';

export type ActivityCooperateChallenge = {
    activityId: number;
    challengeDescTextMapHash: number;
    challengeTitleTextMapHash: number;
    draftID: number;
    dungeonID: number;
    galleryID: number;
    id: number;
    matchID: number;
    pushTipsId: number;
    watcherList: number[];
} & ObfuscatedValue;
