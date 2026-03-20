import type { ObfuscatedValue } from './common';

export type ActivityJourneyGearLevel = {
    groupId: number;
    levelDescTextMapHash: number;
    levelId: number;
    levelImagePath: string;
    levelNameTextMapHash: number;
    scenePointId: number;
    unlockDay: number;
    watcherId: number;
} & ObfuscatedValue;
