import type { ObfuscatedValue } from './common';

export type Vehicle = {
    featureTagGroupID: number;
    id: number;
} & ObfuscatedValue;
