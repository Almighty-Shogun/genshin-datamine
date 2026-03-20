import type { ObfuscatedValue } from './common';

export type AkaFesRhythm = {
    adjustDungeonId: number;
    adjustGalleryId: number;
    calibrationTime: string;
    comboStrength: number[];
    dungeonId: number;
    galleryId: number;
    id: number;
    levelNameTextMapHash: number;
    openDay: number;
    playTutorialId: number;
    score: number;
    tutorialId: number;
    type: string;
    watcherId: number[];
} & ObfuscatedValue;
