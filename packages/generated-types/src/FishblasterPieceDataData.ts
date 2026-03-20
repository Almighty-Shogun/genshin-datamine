import type { ObfuscatedValue } from './common';

export type FishblasterPieceDataData = {
    descTextMapHash: number;
    icon: string;
    id: number;
    nameTextMapHash: number;
    type: number;
} & ObfuscatedValue;
