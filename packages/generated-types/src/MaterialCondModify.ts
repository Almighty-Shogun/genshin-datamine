import type { ObfuscatedValue } from './common';

export type MaterialCondModify = {
    condType: string;
    id: number;
    materialId: number;
} & ObfuscatedValue;
