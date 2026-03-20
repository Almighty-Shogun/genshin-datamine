import type { ObfuscatedValue } from './common';

export type SignInCond = {
    condComb: string;
    condList: {
        paramList: number[];
        type: string;
    }[];
    configId: number;
    totalDayCount: number;
} & ObfuscatedValue;
