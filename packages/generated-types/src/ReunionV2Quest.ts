import type { ObfuscatedValue } from './common';

export type ReunionV2Quest = {
    chapterId: number;
    descTextMapHash: number;
    id: number;
    priority: number;
    requiredPlayerLevel: number;
    tabNameTextMapHash: number;
    watcherList: number[];
} & ObfuscatedValue;
