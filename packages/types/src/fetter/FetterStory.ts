import type { TriggerCondition } from './common';

export type FetterStoryFinishConditionType =
    | "FETTER_COND_NOT_OPEN"
    | "FETTER_COND_FINISH_PARENT_QUEST"
    | "FETTER_COND_FINISH_QUEST";

export type FetterStoryOpenConditionType =
    | "FETTER_COND_NONE"
    | "FETTER_COND_FETTER_LEVEL"
    | "FETTER_COND_FINISH_QUEST"
    | "FETTER_COND_FINISH_PARENT_QUEST"
    | "FETTER_COND_NOT_OPEN";

export type FetterStory = {
    avatarId: number;
    fetterId: number;
    finishConds: TriggerCondition<FetterStoryFinishConditionType>[];
    isHiden: boolean;
    openConds: TriggerCondition<FetterStoryOpenConditionType>[];
    storyContext2TextMapHash: number;
    storyContextTextMapHash: number;
    storyTitle2TextMapHash: number;
    storyTitleLockedTextMapHash: number;
    storyTitleTextMapHash: number;
    tips: number[];
};
