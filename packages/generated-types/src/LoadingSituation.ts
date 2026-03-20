import type { ObfuscatedValue } from './common';

export type LoadingSituation = {
    area1ID: number[];
    areaTerrainType: string;
    dungeonType: string;
    loadingSituationType: string;
    picPath: string;
    sceneID: number[];
    stageID: number;
} & ObfuscatedValue;
