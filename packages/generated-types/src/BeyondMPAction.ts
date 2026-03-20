import type { ObfuscatedValue } from './common';

export type BeyondMPAction = {
    displayNameTextMapHash: number;
    id: number;
    type: string;
} & ObfuscatedValue;
