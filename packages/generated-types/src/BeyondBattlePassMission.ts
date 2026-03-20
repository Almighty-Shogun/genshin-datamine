import type { ObfuscatedValue } from './common';

export type BeyondBattlePassMission = {
    addPoint: number;
    descTextMapHash: number;
    id: number;
    isDisuse: boolean;
    isForce: boolean;
    order: number;
    progress: number;
    refreshType: string;
    rewardId: number;
    scheduleId: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
} & ObfuscatedValue;
