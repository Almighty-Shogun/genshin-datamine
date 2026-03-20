import type { ObfuscatedValue } from './common';

export type QuestAlchemySimExam = {
    id: number;
    mainQuestId: number;
    pushTipsId: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
