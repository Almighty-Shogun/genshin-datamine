import type { ObfuscatedValue } from './common';

export type QuestAlchemySimCrop = {
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
