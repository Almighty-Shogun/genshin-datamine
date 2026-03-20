import type { ObfuscatedValue } from './common';

export type AutoChessTalent = {
    buffIdList: number[];
    cost: number;
    descParam: string[];
    descTextMapHash: number;
    id: number;
    unlockDay: number;
} & ObfuscatedValue;
