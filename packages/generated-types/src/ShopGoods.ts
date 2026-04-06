import type { ObfuscatedValue } from './common';

export type ShopGoods = {
    beginTime: string;
    buyLimit: number;
    chooseOneGroupId: number;
    costHcoin: number;
    costItems: {
        count: number;
        id: number;
    }[];
    costMcoin: number;
    costScoin: number;
    discountRate: number;
    displayDaysBeforeSell: number;
    endTime: string;
    goodsId: number;
    isBuyOnce: boolean;
    itemCount: number;
    itemId: number;
    maxPlayerLevel: number;
    minPlayerLevel: number;
    originalPrice: boolean;
    platformTypeList: unknown[];
    precondition: string;
    preconditionHidden: boolean;
    preconditionParam: number;
    preconditionParamList: string[];
    refreshParam: number;
    refreshType: string;
    rotateId: number;
    secondarySheetId: number;
    shopType: number;
    showId: number;
    sortLevel: number;
    subTabId: number;
    subTagNameTextMapHash: number;
} & ObfuscatedValue;
