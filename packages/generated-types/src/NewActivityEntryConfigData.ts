import type { ObfuscatedValue } from './common';

export type NewActivityEntryConfigData = {
    activityType: string;
    bannerEffect: string;
    bannerPath: string;
    duration: number;
    id: number;
    sortPriority: number;
    tabIcon: string;
    tabNameTextMapHash: number;
} & ObfuscatedValue;
