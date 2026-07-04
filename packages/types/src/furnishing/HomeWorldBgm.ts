import type { ObfuscatedValue } from '../common';

export type HomeWorldBgm = {
    bgmID: number;
    bgmNameTextMapHash: number;
    bgmPath: string;
    cityId: number;
    sortOrder: number;
} & ObfuscatedValue;
