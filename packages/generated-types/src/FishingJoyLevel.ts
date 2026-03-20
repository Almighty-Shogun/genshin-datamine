import type { ObfuscatedValue } from './common';

export type FishingJoyLevel = {
    draftId: number;
    galleryId: number;
    groupId: number;
    id: number;
    levelType: string;
    matchId: number;
} & ObfuscatedValue;
