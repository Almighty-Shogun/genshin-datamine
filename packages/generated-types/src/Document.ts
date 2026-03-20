import type { ObfuscatedValue } from './common';

export type Document = {
    contentLocalizedId: number[];
    contentPath: string;
    documentType: string;
    id: number;
    previewPath: string;
    questContentLocalizedId: number[];
    questIDList: number[];
    splitType: string;
    subtitleID: number;
    titleTextMapHash: number;
    videoPath: string;
} & ObfuscatedValue;
