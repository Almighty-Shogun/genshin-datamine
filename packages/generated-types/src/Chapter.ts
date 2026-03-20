import type { ObfuscatedValue } from './common';

export type Chapter = {
    activityId: number;
    beginQuestId: number;
    chapterIcon: string;
    chapterImageHash: number;
    chapterImageTitleTextMapHash: number;
    chapterNumTextMapHash: number;
    chapterSerialNumberIcon: string;
    chapterTitleTextMapHash: number;
    cityId: number;
    endQuestId: number;
    groupId: number;
    id: number;
    inActivityNeedPlayerLevel: number;
    needBeginTimeStr: string;
    needPlayerLevel: number;
    questType: string;
} & ObfuscatedValue;
