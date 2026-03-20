import type { ObfuscatedValue } from './common';

export type NewActivityMainQuestData = {
    activityType: number;
    chapterTitleTextMapHash: number;
    id: number;
    openIndex: number;
    preQuestId: number;
    questDescTextMapHash: number;
    questIdList: number[];
    questRewardPreviewId: number;
    questTitleTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
