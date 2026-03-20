export type ActivityDeliveryDaily = {
    dailyConfigId: number;
    deliveryQuestConfig: {
        parentQuestId: number;
        deliveryQuestId: number;
        startQuestId: number;
        talkQuestId: number;
        watcherId: number[];
        itemId: number;
    }[];
    taskDesc: number[];
    dailyRewardId: number;
};
