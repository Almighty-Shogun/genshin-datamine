import type { ObfuscatedValue } from './common';

export type AlchemySimType = {
    color: number[];
    descriptionTextMapHash: number;
    iconHash: number;
    typeId: number;
} & ObfuscatedValue;
