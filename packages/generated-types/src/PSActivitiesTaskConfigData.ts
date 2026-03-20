import type { ObfuscatedValue } from './common';

export type PSActivitiesTaskConfigData = {
    activityID: number;
    taskNameTextMapHash: number;
    isRequiredForCompletion: boolean;
    ID: number;
    objectID: string;
    hidden: boolean;
} & ObfuscatedValue;
