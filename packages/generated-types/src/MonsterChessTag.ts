import type { ObfuscatedValue } from './common';

export type MonsterChessTag = {
    isHide: boolean;
    tagIconHash: number;
    tagID: number;
} & ObfuscatedValue;
