import type { ObfuscatedValue } from './common';

export type LuminanceStoneChallengeOverall = {
    activityId: number;
    finalGalleryId: number;
    finalStageId: number;
    id: number;
    parentQuestIdList: number[];
    rewardPreviewId: number;
} & ObfuscatedValue;
