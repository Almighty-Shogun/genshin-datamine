import type { ObfuscatedValue } from './common';

export type HomeWorldAreaComfort = {
    areaCenterPos: number[];
    areaCenterRot: number[];
    areaID: number;
    areaType: string;
    blueprintImageAddr: string;
    blueprintSafePointStr: string;
    blueprintSlotNameTextMapHash: number;
    configID: number;
    highLoadLimit: number;
    lowLoadLimit: number;
    maxComfort: number;
    middleLoadLimit: string;
    nameTextMapHash: number;
    playerSafePointStr: string;
    safePointStr: string;
    sceneID: number;
} & ObfuscatedValue;
