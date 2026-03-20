import type { ObfuscatedValue } from './common';

export type OfferingOpenStateConfigData = {
    activityId: number;
    descTextMapHash: number;
    isAllowHostInMpMode: boolean;
    isContinuousLevelUp: boolean;
    itemLimit: string;
    maxLevelLimitType: string;
    nameTextMapHash: number;
    offeringId: number;
    openState: string;
    pushTipID: number;
    scenePointID: number;
} & ObfuscatedValue;
