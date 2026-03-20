import type { ObfuscatedValue } from './common';

export type MultiCharacterStage = {
    openDay: number;
    stageDescTextMapHash: number;
    stageId: number;
    stageTitleTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
