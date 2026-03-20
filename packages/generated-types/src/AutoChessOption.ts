import type { ObfuscatedValue } from './common';

export type AutoChessOption = {
    actionIdList: number[];
    id: number;
    nameTextMapHash: number;
    paramList: number[];
} & ObfuscatedValue;
