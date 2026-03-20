import type { ObfuscatedValue } from './common';

export type MonsterChessV2Tag = {
    isHide: boolean;
    tagIconHash: number;
    tagID: number;
} & ObfuscatedValue;
