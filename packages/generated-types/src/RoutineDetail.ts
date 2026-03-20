import type { ObfuscatedValue } from './common';

export type RoutineDetail = {
    centerPosition: string;
    condComb: string;
    condVec: {
        param1: number;
        param2: number;
        type: string;
    }[];
    descTextMapHash: number;
    enterDistance: number;
    exitDistance: number;
    finishContent: {
        finishType: string;
        param1: number;
        param2: number;
        progress: number;
    };
    goalTextMapHash: number;
    groupId: number;
    isBackup: boolean;
    nameTextMapHash: number;
    radarRadius: number;
    rewardId: number;
    routineId: number;
    routineType: string;
    tag: number;
} & ObfuscatedValue;
