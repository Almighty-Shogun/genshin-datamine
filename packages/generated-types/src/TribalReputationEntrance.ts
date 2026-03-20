import type { ObfuscatedValue } from './common';

export type TribalReputationEntrance = {
    condComb: string;
    condNameVec: number[];
    condVec: {
        param1: number;
        param2: number;
        type: string;
    }[];
    iconName: string;
    id: number;
} & ObfuscatedValue;
