import type { ObfuscatedValue } from './common';

export type BattlePassMission = {
    activityId: number;
    addPoint: number;
    descTextMapHash: number;
    groupId: number;
    id: number;
    isDisuse: boolean;
    isForce: boolean;
    progress: number;
    refreshType: string;
    rewardId: number;
    scheduleId: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
