import type { ObfuscatedValue } from './common';

export type ReunionV2Video = {
    beginTime: string;
    endTime: string;
    id: number;
    videoPath: string;
} & ObfuscatedValue;
