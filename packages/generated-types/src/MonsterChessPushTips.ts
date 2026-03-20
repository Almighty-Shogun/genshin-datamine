import type { ObfuscatedValue } from './common';

export type MonsterChessPushTips = {
    id: number;
    paramList: number[];
    pushTipsId: number;
    showType: string;
} & ObfuscatedValue;
