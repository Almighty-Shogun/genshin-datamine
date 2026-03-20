import type { ObfuscatedValue } from './common';

export type Draft = {
    confirmCountDown: number;
    exec: string;
    execSubType: string;
    id: number;
    minPlayerCount: number;
    param: number;
    sceneId: number;
    transferConfig: {
        configId: number;
        groupId: number;
    }[];
    twiceConfirmCountDown: number;
} & ObfuscatedValue;
