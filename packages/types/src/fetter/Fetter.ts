import type { TriggerCondition } from './common';

export type FetterOpenConditionType =
    | "FETTER_COND_UNLOCK_TRANS_POINT"
    | "FETTER_COND_NONE"
    | "FETTER_COND_FINISH_QUEST"
    | "FETTER_COND_FINISH_PARENT_QUEST"
    | "FETTER_COND_FETTER_LEVEL"
    | "FETTER_COND_PLAYER_BIRTHDAY"
    | "FETTER_COND_AVATAR_PROMOTE_LEVEL";

export type Fetter = {
    avatarId: number;
    fetterId: number;
    finishConds: unknown[];
    hideCostumeList: number[];
    isHiden: boolean;
    openConds: TriggerCondition<FetterOpenConditionType>[];
    showCostumeList: number[];
    tips: number[];
    type: number;
    voiceFile: number;
    voiceFileTextMapHash: number;
    voiceTitleLockedTextMapHash: number;
    voiceTitleTextMapHash: number;
};
