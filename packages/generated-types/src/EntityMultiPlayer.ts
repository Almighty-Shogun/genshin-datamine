import type { ObfuscatedValue } from './common';

export type EntityMultiPlayer = {
    elementShieldPerVec: number[];
    endureNumVec: number[];
    id: number;
    propPerVec: {
        propType: string;
        propValueVec: number[];
    }[];
} & ObfuscatedValue;
