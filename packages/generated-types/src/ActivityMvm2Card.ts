import type { ObfuscatedValue } from './common';

export type ActivityMvm2Card = {
    cardId: number;
    cardNameTextMapHash: number;
    cardType: string;
    configId: number;
    elementType: string;
    iconPath: string;
    tagList: number[];
} & ObfuscatedValue;
