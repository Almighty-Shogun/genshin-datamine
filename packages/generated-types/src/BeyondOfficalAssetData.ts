import type { ObfuscatedValue } from './common';

export type BeyondOfficalAssetData = {
    assetType: string;
    id: number;
    path: string;
} & ObfuscatedValue;
