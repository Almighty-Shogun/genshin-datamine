import type { ObfuscatedValue } from './common';

export type NewActivityPreviewConfigData = {
    activityID: number;
    descTextMapHash: number;
    introContentTextMapHash: number;
    introTitleTextMapHash: number;
    middleQuestFinishIDList: number[];
    middleQuestIDList: number[];
    middleQuestUntakeTipQuests: number[];
    openMainQuestIDList: number[];
    openQuestID: number;
    preActivityCondition: {
        condtionId: number;
        desc: string;
    }[];
    preMainQuestIDList: number[];
    preQuestID: number;
    pushTipsID: number;
    rewardPreviewID: number;
} & ObfuscatedValue;
