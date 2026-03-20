import type { ObfuscatedValue } from './common';

export type DailyStaffOption = {
    condList: {
        param: string[];
        type: string;
    }[];
    id: number;
    priority: number;
    weight: number;
} & ObfuscatedValue;
