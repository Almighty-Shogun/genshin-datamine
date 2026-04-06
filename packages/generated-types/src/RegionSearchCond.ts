import type { ObfuscatedValue } from './common';

export type RegionSearchCond = {
    cond: {
        param: number[];
        type: string;
    }[];
    groupId: number;
    id: number;
    logicType: string;
    regionList: number[];
    reminderId: number;
    rewardId: number;
    searchDescTextMapHash: number;
    searchMapDescTextMapHash: number;
    totalProgress: number;
} & ObfuscatedValue;
