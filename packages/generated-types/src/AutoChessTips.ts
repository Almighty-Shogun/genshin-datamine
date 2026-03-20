import type { ObfuscatedValue } from './common';

export type AutoChessTips = {
    descParamList: number[];
    descTextMapHash: number;
    iconHash: number;
    titleTextMapHash: number;
    type: string;
} & ObfuscatedValue;
