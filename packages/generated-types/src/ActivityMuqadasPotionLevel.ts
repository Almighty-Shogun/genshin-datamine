import type { ObfuscatedValue } from './common';

export type ActivityMuqadasPotionLevel = {
    dungeonDescTextMapHash: number;
    dungeonId: number;
    dungeonNameTextMapHash: number;
    galleryId: number;
    levelId: number;
    normalSkillName: string;
    skillDescTextMapHash: number;
    skillThreshold: number;
    specialSkillName: string;
    trialAvatarList: number[];
    watcherList: number[];
} & ObfuscatedValue;
