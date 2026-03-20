import type { ObfuscatedValue } from './common';

export type ShareCD = {
    coolDownList: {
        coolDownTime: number;
        token: number;
    }[];
    id: number;
    isUseRealTime: boolean;
    maxChargeNum: number;
} & ObfuscatedValue;
