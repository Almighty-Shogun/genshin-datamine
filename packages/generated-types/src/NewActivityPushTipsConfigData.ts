import type { ObfuscatedValue } from './common';

export type NewActivityPushTipsConfigData = {
    activityId: number;
    pushTipsId: number;
    showIcon: string;
    showImmediately: boolean;
    subtitleTextMapHash: number;
    tabIcon: string;
    titleTextMapHash: number;
    tutorialId: number;
} & ObfuscatedValue;
