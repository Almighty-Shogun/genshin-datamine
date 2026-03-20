import type { ObfuscatedValue } from './common';

export type DungeonEntry = {
    condComb: string;
    cooldownTipsDungeonId: number[];
    descriptionCycleRewardList: number[][];
    descTextMapHash: number;
    dungeonEntryId: number;
    id: number;
    isDefaultOpen: boolean;
    isShowInAdvHandbook: boolean;
    picPath: string;
    rewardDataId: number;
    satisfiedCond: {
        param1: number;
        param2: number;
        type: string;
    }[];
    sceneId: number;
    systemOpenUiId: number;
    type: string;
} & ObfuscatedValue;
