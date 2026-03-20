import type { ObfuscatedValue } from './common';

export type ShuffleBoardLevel = {
    descTextMapHash: number;
    id: number;
    prefabPath: string;
    previewItems: number[];
    stage: number;
    titleTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
