import type { ObfuscatedValue } from './common';

export type ActivityNatlanUrgentEvent = {
    descTextMapHash: number;
    id: number;
    nameTextMapHash: number;
    outputs: ObfuscatedValue;
    position: number[];
    type: string;
} & ObfuscatedValue;
