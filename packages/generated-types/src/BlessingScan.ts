import type { ObfuscatedValue } from './common';

export type BlessingScan = {
    hitBoxesNodeName: string;
    id: number;
    picUpConfig: {
        id: number;
    }[];
    refId: number;
    scanTime: number;
    scanType: string;
    typeId: number;
} & ObfuscatedValue;
