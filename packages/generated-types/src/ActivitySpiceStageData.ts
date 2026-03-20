import type { ObfuscatedValue } from './common';

export type ActivitySpiceStageData = {
    clickNum: number;
    clickZone: number[];
    descTextMapHash: number;
    fetterIncCntLimit: number;
    id: number;
    materialIdList: number[];
    materialNumList: number[];
    materialOrderList: number[];
    nameTextMapHash: number;
    speed: number;
    times: number;
    watcherId: number;
} & ObfuscatedValue;
