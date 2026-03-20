import type { ObfuscatedValue } from './common';

export type ActivityMap = {
    id: number;
    mapSize: number;
    scaleList: number[];
    spritePathHash: number;
    type: string;
    worldOffset: number[];
    worldSize: number;
} & ObfuscatedValue;
