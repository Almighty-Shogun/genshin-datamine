import type { ObfuscatedValue } from './common';

export type LeyLineLevelConfig = {
    id: number;
    levelNameTextMapHash: number;
    tagType: string[];
} & ObfuscatedValue;
