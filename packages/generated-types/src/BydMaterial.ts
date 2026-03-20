import type { ObfuscatedValue } from './common';

export type BydMaterial = {
    descTextMapHash: number;
    dropable: boolean;
    gadgetId: number;
    globalItemLimit: number;
    icon: string;
    id: number;
    isForceGetHint: boolean;
    itemType: string;
    itemUse: {
        useOp: string;
        useParam: string[];
    }[];
    maxUseCount: number;
    nameTextMapHash: number;
    rank: number;
    rankLevel: number;
    stackLimit: number;
    useLevel: number;
    useOnGain: boolean;
    weight: number;
} & ObfuscatedValue;
