import type { ObfuscatedValue } from './common';

export type MoonCond = {
    condList: {
        param: string[];
        type: string;
    }[];
} & ObfuscatedValue;
