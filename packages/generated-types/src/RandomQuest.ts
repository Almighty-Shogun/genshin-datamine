export type RandomQuest = {
    acceptCond: {
        param: string[];
        type: string;
    }[];
    awardItems: {
        count: number;
        id: number;
    }[];
    banType: string;
    beginExec: {
        resourceOpType: string;
        param: string[];
        type: string;
    }[];
    failCond: {
        count: string;
        param_str: string;
        param: string[];
        type: string;
    }[];
    failCondComb: string;
    failExec: {
        resourceOpType: string;
        param: string[];
        type: string;
    }[];
    finishCond: {
        count: string;
        param_str: string;
        param: string[];
        type: string;
    }[];
    finishExec: {
        resourceOpType: string;
        param: string[];
        type: string;
    }[];
    forcePaimonGuidePriority: number;
    guide: {
        param: string[];
        type: string;
    };
    guideHint: {
        param1: string;
        param2: string;
        type: string;
    };
    showGuide: string;
    subIdSet: number;
    unfinishedHintShow: string;
    acceptCondComb: string;
    descTextMapHash: number;
    exclusiveNpcPriority: number;
    failParent: boolean;
    failParentShow: string;
    finishCondComb: string;
    finishParent: boolean;
    isRewind: boolean;
    mainId: number;
    order: number;
    showType: string;
    subId: number;
    titleTextMapHash: number;
};
