import type { ObfuscatedValue } from './common';

export type VintageMarketEvent = {
    id: number;
    triggerType: string;
} & ObfuscatedValue;
