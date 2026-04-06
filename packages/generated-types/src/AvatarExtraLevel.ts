import type { ObfuscatedValue } from './common';

export type AvatarExtraLevel = {
    costItems: {
        count: number;
        id: number;
    }[];
} & ObfuscatedValue;
