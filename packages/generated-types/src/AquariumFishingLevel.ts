import type { ObfuscatedValue } from './common';

export type AquariumFishingLevel = {
    buffList: number[];
    dungeonId: number;
    galleryId: number;
    levelId: number;
    tutorialId: number;
} & ObfuscatedValue;
