import type { ObfuscatedValue } from './common';

export type TowerChallengeLevel = {
    activityID: number;
    descTextMapHash: number;
    draftID: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    monsterPreviewIdList: number[];
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
