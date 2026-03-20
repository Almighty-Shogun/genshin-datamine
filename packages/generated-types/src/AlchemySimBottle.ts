import type { ObfuscatedValue } from './common';

export type AlchemySimBottle = {
    descriptionTextMapHash: number;
    iconHash: number;
    id: number;
    nameTextMapHash: number;
    quality: number;
    subType: string;
} & ObfuscatedValue;
