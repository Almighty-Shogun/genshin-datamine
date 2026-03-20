import type { ObfuscatedValue } from './common';

export type RefreshCycle = {
    cd: number;
    id: number;
    type: string;
} & ObfuscatedValue;
