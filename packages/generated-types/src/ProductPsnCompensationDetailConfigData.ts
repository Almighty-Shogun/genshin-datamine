import type { ObfuscatedValue } from './common';

export type ProductPsnCompensationDetailConfigData = {
    contentVec: {
        materialId: number;
        materialNum: number;
    }[];
    mailConfigId: number;
    configId: number;
    priceTier: string;
} & ObfuscatedValue;
