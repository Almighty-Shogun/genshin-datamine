import type { ObfuscatedValue } from './common';

export type MonsterChessV2PushTips = {
    guideName: string;
    id: number;
    paramList: number[];
    pushTipsId: number;
    showType: string;
} & ObfuscatedValue;
