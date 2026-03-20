import type { ObfuscatedValue } from './common';

export type BeyondEffect = {
    duration: number;
    effectName: string;
    id: number;
    tagList: number[];
} & ObfuscatedValue;
