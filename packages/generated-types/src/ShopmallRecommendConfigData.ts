import type { ObfuscatedValue } from './common';

export type ShopmallRecommendConfigData = {
    condComb: string;
    condVec: {
        param1: number;
        param1Str: string;
        param2: number;
        param2Str: string;
        type: string;
    }[];
    configIdVec: number[];
    id: number;
    oneCardIconName: string;
    order: number;
    shopType: string;
    subTabId: number;
    tabType: string;
    tagType: string;
} & ObfuscatedValue;
