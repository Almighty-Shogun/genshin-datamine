import type { ObfuscatedValue } from './common';

export type BlossomRefresh = {
    blossomChestId: number;
    cityId: number;
    clientShowType: string;
    descTextMapHash: number;
    hideBG: boolean;
    icon: string;
    id: number;
    itemLimitType: string;
    nameTextMapHash: number;
    openLevel: number;
    openState: string;
    refreshCondVec: {
        param: number[];
        type: string;
    }[];
    refreshCount: number;
    refreshTime: string;
    refreshType: string;
    reviseLevel: number;
    rewardType: string;
} & ObfuscatedValue;
