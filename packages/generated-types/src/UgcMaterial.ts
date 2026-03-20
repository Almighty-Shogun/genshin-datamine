import type { ObfuscatedValue } from './common';

export type UgcMaterial = {
    indexId: number;
    materialId: number;
    stackLimit: number;
    tag: number;
    type: string;
} & ObfuscatedValue;
