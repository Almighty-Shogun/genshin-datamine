import type { ObfuscatedValue } from './common';

export type PSActivitiesActivityConfigData = {
    activityNameTextMapHash: number;
    activityDescTextMapHash: number;
    availableByDefault: boolean;
    isRequiredForCompletion: boolean;
    largeIcon: string;
    smallIcon: string;
    ID: number;
    objectID: string;
} & ObfuscatedValue;
