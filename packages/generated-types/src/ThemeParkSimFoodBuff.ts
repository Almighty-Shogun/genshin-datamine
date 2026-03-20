import type { ObfuscatedValue } from './common';

export type ThemeParkSimFoodBuff = {
    descTextMapHash: number;
    durationList: number[];
    iconHash: number;
    id: number;
    levelList: number[];
    paramList: number[][];
    tipsTextMapHash: number;
    titleTextMapHash: number;
    type: string;
} & ObfuscatedValue;
