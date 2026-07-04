import type { ObfuscatedValue } from '../common';

export type FurnitureSuite = {
    favoriteNpcExcelIdVec: number[];
    furnType: number[];
    interRatio: number;
    itemIcon: string;
    jsonName: string;
    mapIcon: string;
    suiteDescTextMapHash: number;
    suiteID: number;
    suiteNameTextMapHash: number;
    transStr: string;
} & ObfuscatedValue;
