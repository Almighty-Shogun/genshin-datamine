import type { ObfuscatedValue } from './common';

export type ActivityFilmfestBattleLevel = {
    activityID: number;
    dungeonId: number;
    galleryId: number;
    levelDescriptionTextMapHash: number;
    levelID: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    skillId: number;
    trialAvatarIdList: number[];
    watcherList: number[];
} & ObfuscatedValue;
