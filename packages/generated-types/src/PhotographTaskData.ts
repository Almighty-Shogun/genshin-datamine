import type { ObfuscatedValue } from './common';

export type PhotographTaskData = {
    centerX: number;
    centerY: number;
    centerZ: number;
    endTime: number;
    finishTipsTextMapHash: number;
    questid: number;
    radius: number;
    sceneID: number;
    startTime: number;
    startTipsTextMapHash: number;
    targetGadgetID: string[];
    taskId: number;
    taskType: string;
} & ObfuscatedValue;
