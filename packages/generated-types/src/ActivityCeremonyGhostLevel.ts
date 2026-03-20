import type { ObfuscatedValue } from './common';

export type ActivityCeremonyGhostLevel = {
    activityID: number;
    descTextMapHash: number;
    draftId: number;
    galleryId: number;
    levelID: number;
    levelImagePath: string;
    matchId: number;
    nameTextMapHash: number;
    openDay: number;
    pushTipsId: number;
    questList: unknown[];
    watcherList: number[];
} & ObfuscatedValue;
