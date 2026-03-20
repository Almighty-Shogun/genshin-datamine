import type { ObfuscatedValue } from './common';

export type RoleCombatSchedule = {
    avatarConfigId: number;
    beginTimeStr: string;
    rewardGroupId: number;
    scheduleId: number;
} & ObfuscatedValue;
