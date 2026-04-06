import type { ObfuscatedValue } from './common';

export type BeyondUIEffect = {
    duration: number;
    effectType: string;
    iconPathHash: number;
    id: number;
    tagList: number[];
} & ObfuscatedValue;
