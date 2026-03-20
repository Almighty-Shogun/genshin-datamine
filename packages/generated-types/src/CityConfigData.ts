import type { ObfuscatedValue } from './common';

export type CityConfigData = {
    adventurePointId: number;
    areaIdVec: number[];
    cityGoddnessDescTextMapHash: number;
    cityGoddnessNameTextMapHash: number;
    cityId: number;
    cityNameTextMapHash: number;
    expeditionMap: string;
    expeditionWaterMark: string;
    mapPosX: number;
    mapPosY: number;
    openState: string;
    zoomForExploration: number;
} & ObfuscatedValue;
