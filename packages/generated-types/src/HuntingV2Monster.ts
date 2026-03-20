import type { ObfuscatedValue } from './common';

export type HuntingV2Monster = {
    difficulty: string;
    id: number;
    level: number;
    limitTime: number;
    reviseLevelId: number;
} & ObfuscatedValue;
