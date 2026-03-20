import type { ObfuscatedValue } from './common';

export type MichiaePreview = {
    activityID: number;
    descTextMapHash: number;
    introTitleTextMapHash: number;
    introContentTextMapHash: number;
    rewardPreviewID: number;
    pushTipsID: number;
    bossGroupBundleId: number;
    radarSearchRadius: number;
    radarRemoveRadius: number;
    allRadarShowLimit: number;
    preSubQuestId: number;
    preActivityQuestId: number;
    activityQuestId: number;
    preQuestIdMap: ObfuscatedValue;
    preQuestIdList: number[];
} & ObfuscatedValue;
