export type FlightActivity = {
    id: number;
    activityId: number;
    previewRewardId: number;
    startQuestId: number;
    npcId: number;
    medalId: number[];
    dailyFactorVec: {
        timeFactor: number;
        goldFactor: number;
    }[];
};
