import type { ObfuscatedValue } from './common';

export type ActivitySnowRaceParkourLevel = {
    activityID: number;
    dungeonId: number;
    galleryId: number;
    levelDescTextMapHash: number;
    levelID: number;
    levelNameTextMapHash: number;
    nameTextMapHash: number;
    openDay: number;
    playType: string;
    questList: number[];
    trialAvatarId: number;
    tutorialId: number;
    watcherList: number[];
} & ObfuscatedValue;
