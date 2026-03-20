import type { ObfuscatedValue } from './common';

export type Widget = {
    customizeDesc: number[];
    materialID: number;
    pushTipsId: number;
    showRedpoint: boolean;
} & ObfuscatedValue;
