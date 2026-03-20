import type { ObfuscatedValue } from './common';

export type LocalLegend = {
    descTextMapHash: number;
    iconHash: number;
    id: number;
    monsterId: number;
    nameTextMapHash: number;
    prefabName: string;
    watcherIdList: number[];
} & ObfuscatedValue;
