import type { ObfuscatedValue } from './common';

export type MpPlayGroup = {
    abilityGroupList: number[];
    bornConfigId: number;
    centerPosList: number[];
    centerRadius: number;
    clientShowType: string;
    generalRewardConfigId: number;
    groupList: number[];
    isDirectToBag: boolean;
    isDisabled: boolean;
    limitRegion: string;
    materialCostId: number;
    materialCostNum: number;
    playId: number;
    prepareTime: number;
    rateList: number[];
    rebornConfigId: number;
    resinCost: number;
    reviseId: number;
    rewardConfigId: number;
    rewardGroupId: number;
    rewardVec: {
        dropID: number;
        rewardId: number;
        rewardPreview: number;
    }[];
    singlePrepareTime: number;
    targetPosList: number[];
    upAvatarList: number[];
} & ObfuscatedValue;
