import type { ObfuscatedValue } from './common';

export type PitchPotStage = {
    draftId: number;
    galleryId: number;
    imageNameHash: number;
    matchID: number;
    openDay: number;
    pushTipsID: number;
    stageId: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
