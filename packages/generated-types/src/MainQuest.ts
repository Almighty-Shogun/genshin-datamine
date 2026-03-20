import type { ObfuscatedValue } from './common';

export type MainQuest = {
    activeMode: string;
    activityId: number;
    chapterId: number;
    descTextMapHash: number;
    id: number;
    luaPath: string;
    mainQuestTag: string;
    recommendLevel: number;
    repeatable: boolean;
    resId: number;
    rewardIdList: number[];
    series: number;
    showRedPoint: boolean;
    showType: string;
    specialShowCondIdList: number[];
    specialShowQuestId: number;
    specialShowRewardId: number[];
    suggestTrackMainQuestList: number[];
    suggestTrackOutOfOrder: boolean;
    taskID: number;
    titleTextMapHash: number;
    type: string;
    unlockDescTextMapHash: number;
} & ObfuscatedValue;
