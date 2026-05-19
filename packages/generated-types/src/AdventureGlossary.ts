import type { ObfuscatedValue } from './common';

export type AdventureGlossary = {
    descTextMapHash: number;
    firstMetId: number;
    id: number;
    imagePath: string;
    nameTextMapHash: number;
    tabType: string;
} & ObfuscatedValue;
