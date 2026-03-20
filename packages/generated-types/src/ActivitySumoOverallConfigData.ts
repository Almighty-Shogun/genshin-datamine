import type { ObfuscatedValue } from './common';

export type ActivitySumoOverallConfigData = {
    activityId: number;
    dungeonEntryId: number;
    globalWatcherId: number;
    id: number;
    leadQuestId: number;
    prerequisiteQuestId: number;
    pushTipsId: number;
    rewardPreviewId: number;
    scheduleId: number;
    switchTeamCD: number;
    teamNum: number;
} & ObfuscatedValue;
