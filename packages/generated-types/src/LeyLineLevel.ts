import type { ObfuscatedValue } from './common';

export type LeyLineLevel = {
    id: number;
    reviseLevel: number;
    watcherList: number[];
} & ObfuscatedValue;
