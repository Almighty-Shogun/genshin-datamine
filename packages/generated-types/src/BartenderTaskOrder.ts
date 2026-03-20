import type { ObfuscatedValue } from './common';

export type BartenderTaskOrder = {
    dialogIdFail: number;
    dialogIdSucc: number;
    isGuideQuest: boolean;
    nextQuestId: number;
    orderId: number[];
    questId: number;
} & ObfuscatedValue;
