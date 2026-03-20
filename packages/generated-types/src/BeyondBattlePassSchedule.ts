import type { ObfuscatedValue } from './common';

export type BeyondBattlePassSchedule = {
    beginDateStr: string;
    buyLevelCostCoinNum: number;
    endDateStr: string;
    extraPaidRewardId: number;
    id: number;
    levelRewardIndexId: number;
    mailConfigId: number;
    mailDayCount: number;
    titleNameTextMapHash: number;
} & ObfuscatedValue;
