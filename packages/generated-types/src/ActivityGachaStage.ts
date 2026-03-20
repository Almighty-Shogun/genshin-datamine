import type { ObfuscatedValue } from './common';

export type ActivityGachaStage = {
    condID: number;
    groupIdList: number[];
    groupNumList: number[];
    isNeedFinish: boolean;
    isTech: boolean;
    nextStageId: number;
    openQuestID: number;
    stageGroupIdList: number[];
    stageId: number;
    type: string;
    watcherID: number;
} & ObfuscatedValue;
