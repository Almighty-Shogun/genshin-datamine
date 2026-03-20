export type BonusActivity = {
    bonusActivityId: number;
    condList: {
        type: string;
        paramList: number[];
    }[];
    watcherId: number;
    rewardItemList: {
        id: number;
        count: number;
    }[];
    id: number;
    triggerConfig: {
        triggerType: string;
        paramList: string[];
    };
    progress: number;
};
