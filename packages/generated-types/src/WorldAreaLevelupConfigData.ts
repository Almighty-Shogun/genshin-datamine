export type WorldAreaLevelupConfigData = {
    sceneId: number;
    areaId: number;
    level: number;
    consumeItem: {
        itemId: number;
        itemNum: number;
    };
    actionVec: {
        param1Vec: number[];
        param2Vec: number[];
        type: string;
    }[];
};
