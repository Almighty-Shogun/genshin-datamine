import type { ObfuscatedValue } from './common';

export type ActivityBladeHeartLevel = {
    activityID: number;
    dungeonId: number;
    enemySkillDescTextMapHash: number;
    galleryId: number;
    levelID: number;
    levelType: string;
    nameTextMapHash: number;
    openDay: number;
    pic: string;
    questList: unknown[];
    trialAvatarList: number[];
    watcherList: number[];
} & ObfuscatedValue;
