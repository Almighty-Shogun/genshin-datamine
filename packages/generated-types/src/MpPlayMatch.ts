import type { ObfuscatedValue } from './common';

export type MpPlayMatch = {
    bgImage: string;
    buffList: number[];
    id: number;
    maxPlayers: number;
    minPlayers: number;
    playDescTextMapHash: number;
    playNameTextMapHash: number;
    playType: string;
    pushTipsId: number;
    seriesId: number;
    settleType: string;
} & ObfuscatedValue;
