import type { ObfuscatedValue } from './common';

export type PSActivitiesSubTaskConfigData = {
    taskID: number;
    ID: number;
    objectID: string;
    hidden: boolean;
} & ObfuscatedValue;
