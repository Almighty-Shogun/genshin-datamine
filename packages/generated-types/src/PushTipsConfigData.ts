import type { ObfuscatedValue } from './common';

export type PushTipsConfigData = {
    codexType: string;
    disableShowG: boolean;
    groupId: number;
    pushTipsId: number;
    pushTipsType: string;
    rewardId: number;
    showIcon: string;
    showImmediately: boolean;
    subtitleTextMapHash: number;
    tabIcon: string;
    titleTextMapHash: number;
    tutorialId: number;
    watcherId: number;
} & ObfuscatedValue;
