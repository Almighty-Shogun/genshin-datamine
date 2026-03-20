export type CityLevelupConfigData = {
    actionVec: {
        param1Vec: number[];
        param2Vec: number[];
        type: string;
    }[];
    cityId: number;
    consumeItem: {
        itemId: number;
    };
    level: number;
    rewardID: number;
    sceneId: number;
};
