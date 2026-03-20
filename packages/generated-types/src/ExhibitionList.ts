import type { ObfuscatedValue } from './common';

export type ExhibitionList = {
    displayFormatTextMapHash: number;
    displayTitleTextMapHash: number;
    displayType: string;
    id: number;
    seriesID: number;
} & ObfuscatedValue;
