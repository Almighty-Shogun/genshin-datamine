import type { ObfuscatedValue } from '../common';

export type TowerSchedule = {
    buffnameTextMapHash: number;
    closeTime: string;
    descTextMapHash: number;
    entranceFloorId: number[];
    icon: string;
    monthlyLevelConfigId: number;
    rewardGroup: number;
    scheduleId: number;
} & ObfuscatedValue;
