import type { ObfuscatedValue } from './common';

export type FontaineGatherStage = {
    id: number;
    indexID: number;
    openDay: number;
    pushTipsID: number;
    stageDescTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
