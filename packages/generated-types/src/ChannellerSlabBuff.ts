import type { ObfuscatedValue } from './common';

export type ChannellerSlabBuff = {
    buffNameTextMapHash: number;
    buffQualityType: string;
    cost: number;
    descParam: string[];
    descTextMapHash: number;
    icon: string;
    id: number;
    materialID: number;
} & ObfuscatedValue;
