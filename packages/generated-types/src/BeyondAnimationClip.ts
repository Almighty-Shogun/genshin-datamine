import type { ObfuscatedValue } from './common';

export type BeyondAnimationClip = {
    duration: number;
    id: number;
    nameTextMapHash: number;
    stateName: string;
    tagList: number[];
} & ObfuscatedValue;
