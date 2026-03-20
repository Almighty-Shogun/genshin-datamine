import type { ObfuscatedValue } from './common';

export type ActivityGachaBase = {
    activityId: number;
    elemTime: number;
    exchangeTipsCond: number;
    freeModeUnlockQuest: number;
    materialId: number;
    maxConvert: number;
    questList: number[];
    reminderId: number;
    robotHiddenGuarNum: number;
    robotHiddenGuarRate: number;
    robotLimit: number;
    taskContentId: number;
    unlockStageId: number;
    watcherList: number[];
} & ObfuscatedValue;
