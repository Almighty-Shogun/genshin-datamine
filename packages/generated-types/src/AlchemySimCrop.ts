import type { ObfuscatedValue } from './common';

export type AlchemySimCrop = {
    descriptionTextMapHash: number;
    iconHash: number;
    id: number;
    nameTextMapHash: number;
    quality: number;
    tag: {
        value: number;
    }[];
    type: number;
} & ObfuscatedValue;
