import type { ObfuscatedValue } from './common';

export type BeyondEffect = {
    duration: number;
    effectName: string;
    iconPathHash: number;
    id: number;
    tagList: number[];
} & ObfuscatedValue;
