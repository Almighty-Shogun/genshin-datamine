import type { ObfuscatedValue } from './common';

export type ThemeParkSimStageGoal = {
    descTextMapHash: number;
    goalId: number;
    param: number[];
    type: string;
} & ObfuscatedValue;
