import type { ObfuscatedValue } from './common';

export type ReactionEnergy = {
    configID: number;
    costPeriod: number;
    costRatio: number;
    dropProb: number;
    isPersistent: boolean;
    maxDurability: number;
    minDurability: number;
    poolRevivePeriod: number;
    type: string;
} & ObfuscatedValue;
