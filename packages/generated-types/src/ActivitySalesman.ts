export type ActivitySalesman = {
    dailyConfigIdList: number[];
    normalRewardIdList: number[];
    scheduleId: number;
    specialProbList: number[];
    specialReward: {
        id: number;
        rewardType: string;
    };
    specialRewardIdList: number[];
};
