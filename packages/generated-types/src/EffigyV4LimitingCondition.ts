import type { ObfuscatedValue } from './common';

export type EffigyV4LimitingCondition = {
    conditionType: string;
    exclusiveDescTextMapHash: number;
    exclusiveId: number;
    id: number;
    score: number;
} & ObfuscatedValue;
