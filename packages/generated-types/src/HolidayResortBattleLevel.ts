import type { ObfuscatedValue } from './common';

export type HolidayResortBattleLevel = {
    activityID: number;
    buffIdList: number[];
    descTextMapHash: number;
    dungeonId: number;
    galleryId: number;
    levelID: number;
    monsterPreviewId: number;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
