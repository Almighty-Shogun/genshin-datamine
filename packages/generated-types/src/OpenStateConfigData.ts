import type { ObfuscatedValue } from './common';

export type OpenStateConfigData = {
    allowClientOpen: boolean;
    cond: {
        condType: string;
        param: number;
        param2: number;
    }[];
    defaultState: boolean;
    id: number;
    systemOpenUiId: number;
} & ObfuscatedValue;
