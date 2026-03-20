import type { ObfuscatedValue } from './common';

export type AsyncGadget = {
    gadgetId: number;
    subType: string;
    type: string;
} & ObfuscatedValue;
