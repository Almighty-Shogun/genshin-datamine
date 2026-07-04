import type { ObfuscatedValue } from '../common';
import type { DungeonEntryConditionType, DungeonEntryType, DungeonLogicType } from './common';

export type DungeonEntryCondition = {
    param1: number;
    param2: number;
    type: DungeonEntryConditionType;
};

export type DungeonEntry = {
    condComb: Exclude<DungeonLogicType, "LOGIC_AND">;
    cooldownTipsDungeonId: number[];
    descriptionCycleRewardList: number[][];
    descTextMapHash: number;
    dungeonEntryId: number;
    id: number;
    isDefaultOpen: boolean;
    isShowInAdvHandbook: boolean;
    picPath: string;
    rewardDataId: number;
    satisfiedCond: DungeonEntryCondition[];
    sceneId: number;
    systemOpenUiId: number;
    type: DungeonEntryType;
} & ObfuscatedValue;
