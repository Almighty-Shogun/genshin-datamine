import type { ObfuscatedValue } from './common';

export type PaintingRepairLevel = {
    groupId: number;
    groupLinkId: number;
    levelId: number;
} & ObfuscatedValue;
