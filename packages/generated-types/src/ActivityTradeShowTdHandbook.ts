import type { ObfuscatedValue } from './common';

export type ActivityTradeShowTdHandbook = {
    id: number;
    nameTextMapHash: number;
    skillDescTextMapHash: number;
    type: string;
} & ObfuscatedValue;
