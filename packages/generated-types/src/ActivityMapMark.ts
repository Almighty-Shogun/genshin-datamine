import type { ObfuscatedValue } from './common';

export type ActivityMapMark = {
    hasSightFan: boolean;
    iconPathHash: number;
    id: number;
    layer: number;
    rotateType: string;
    worldSize: number;
} & ObfuscatedValue;
