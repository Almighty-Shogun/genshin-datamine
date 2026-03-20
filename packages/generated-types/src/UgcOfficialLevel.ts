import type { ObfuscatedValue } from './common';

export type UgcOfficialLevel = {
    id: number;
    levelDescTextMapHash: number;
    levelNameTextMapHash: number;
    previewPath: string;
    unlockDay: number;
} & ObfuscatedValue;
