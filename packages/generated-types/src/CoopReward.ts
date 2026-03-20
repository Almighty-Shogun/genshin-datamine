export type CoopReward = {
    chapterId: number;
    condTipDesTextMapHash: number;
    condTipTextMapHash: number;
    id: number;
    rewardCond: {
        args: number[];
        condType: string;
    }[];
    rewardId: number;
    sortId: number;
};
