import type { ObfuscatedValue } from './common';

export type BeyondInitialActiveSchedule = {
    activityId: number;
    descTextMapHash: number;
    normalWatcherIdList: number[];
    preQuestId: number;
    rewardPreviewId: number;
    scheduleId: number;
    sortPriority: number;
    tabIcon: string;
    tabNameTextMapHash: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
