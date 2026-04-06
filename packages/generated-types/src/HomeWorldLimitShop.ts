export type HomeWorldLimitShop = {
    buyLimit: number;
    cond: {
        condition: string;
        conditionParam: number[];
    }[];
    costItems: {
        count: number;
        id: number;
    }[];
    goodsId: number;
    itemID: number;
    poolID: number;
    weight: number;
};
