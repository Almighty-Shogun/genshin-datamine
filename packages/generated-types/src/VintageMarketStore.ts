export type VintageMarketStore = {
    storeId: number;
    defaultCoin: number;
    slotCount: number;
    slotCost: number[];
    attrList: {
        defaultValue: number;
        maxValue: number;
    }[];
    storeNameTextMapHash: number;
    attrNameList: number[];
    npcId: number;
    storeIconNameHash: number;
};
