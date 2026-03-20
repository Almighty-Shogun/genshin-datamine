import type { ObfuscatedValue } from './common';

export type BeyondActivityPreviewData = {
    activityId: number;
    activityNameTextMapHash: number;
    prefabName: string;
    scheduleId: number;
    sortPriority: number;
} & ObfuscatedValue;
