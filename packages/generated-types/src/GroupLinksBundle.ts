import type { ObfuscatedValue } from './common';

export type GroupLinksBundle = {
    alwaysShowArea: boolean;
    enterRegionReminder: number;
    groupList: number[];
    hintGroup: number;
    hintRadius: number;
    icon: string;
    id: number;
    isDefaultShowMark: boolean;
    nameTextMapHash: number;
    playType: string;
    reviseLevel: number;
    rewardId: number;
    rewardType: string;
    showAreaOnMap: boolean;
    tipsTextMapHash: number;
    trackId: number;
    uiRadius: number;
} & ObfuscatedValue;
