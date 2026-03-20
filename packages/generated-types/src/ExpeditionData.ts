import type { ObfuscatedValue } from './common';

export type ExpeditionData = {
    cityId: number;
    descriptionTextMapHash: number;
    id: number;
    nameTextMapHash: number;
    picture: string;
    posX: number;
    posY: number;
} & ObfuscatedValue;
