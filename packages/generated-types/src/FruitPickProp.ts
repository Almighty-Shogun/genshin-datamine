import type { ObfuscatedValue } from './common';

export type FruitPickProp = {
    descTextMapHash: number;
    iconHash: number;
    id: number;
    nameTextMapHash: number;
    type: string;
} & ObfuscatedValue;
