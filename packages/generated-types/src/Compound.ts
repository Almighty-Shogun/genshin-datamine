import type { ObfuscatedValue } from './common';

export type Compound = {
    costTime: number;
    countDescTextMapHash: number;
    descTextMapHash: number;
    dropId: number;
    groupID: number;
    icon: string;
    id: number;
    isDefaultUnlocked: boolean;
    nameTextMapHash: number;
    queueSize: number;
    rankLevel: number;
    type: string;
} & ObfuscatedValue;
