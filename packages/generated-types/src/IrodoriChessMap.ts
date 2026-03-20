import type { ObfuscatedValue } from './common';

export type IrodoriChessMap = {
    mapId: number;
    dungeonId: number;
    entryPointId: number;
    show: boolean;
    cardPool: number[];
    totalCardPoints: number;
    singleGearLimits: ObfuscatedValue;
    entrancePointList: number[];
    exitPointList: number[];
    disorderList: number[];
    entryPageDisorderList: number[];
    initBuildingPoints: number;
    mapNameTextMapHash: number;
    descTextMapHash: number;
    mapIconPath: string;
    presetGearMap: ObfuscatedValue;
    difficulty: number;
} & ObfuscatedValue;
