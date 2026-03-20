import type { ObfuscatedValue } from './common';

export type BeyondHallReport = {
    id: number;
    itemNameTextMapHash: number;
    tagType: string;
} & ObfuscatedValue;
