import type { ObfuscatedValue } from './common';

export type AquariumStage = {
    openDay: number;
    stageId: number;
    stageNameTextMapHash: number;
} & ObfuscatedValue;
