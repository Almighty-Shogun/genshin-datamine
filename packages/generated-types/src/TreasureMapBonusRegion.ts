import type { ObfuscatedValue } from './common';

export type TreasureMapBonusRegion = {
    fragmentNum: number;
    groupId: number;
    id: number;
    mapDescTextMapHash: number;
    regionCenter: number[];
    regionRadius: number;
    reviseLevel: number;
    rewardId: number;
    rewardPreviewId: number;
    showImage: string;
    unlockRegionId: number;
} & ObfuscatedValue;
