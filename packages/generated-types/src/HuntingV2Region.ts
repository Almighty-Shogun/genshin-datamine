import type { ObfuscatedValue } from './common';

export type HuntingV2Region = {
    centerPosList: number[];
    centerRadius: number;
    cityId: number;
    groupId: number;
    id: number;
    regionInfoTextMapHash: number;
} & ObfuscatedValue;
