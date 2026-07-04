import type { ObfuscatedValue } from '../common';
import type { FishStockType } from './common';

export type FishStock = {
    fishWeight: Record<string, number>;
    id: number;
    type: FishStockType;
} & ObfuscatedValue;
