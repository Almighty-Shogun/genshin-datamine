import type { ObfuscatedValue } from './common';

export type UgcTriggerCond = {
    condType: string;
    id: number;
} & ObfuscatedValue;
