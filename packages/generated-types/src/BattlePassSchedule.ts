import type { ObfuscatedValue } from './common';

export type BattlePassSchedule = {
    beginDateStr: string;
    buyLevelCostCoinNum: number;
    cycleList: number[];
    endDateStr: string;
    extraPaidRewardId: number;
    id: number;
    levelRewardIndexId: number;
    mailConfigId: number;
    mailDayCount: number;
    normalRewardList: number[];
    rewardType: string;
    showImage: string;
    showRewardList: number[];
    storyId: number;
    stroyRewardList: number[];
    titleNameTextMapHash: number;
} & ObfuscatedValue;
