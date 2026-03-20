import type { ObfuscatedValue } from './common';

export type QuestCheck = {
    bonusList: number[];
    descContentTextMapHash: number;
    iconPath: string;
    id: number;
    parentQuestId: number;
} & ObfuscatedValue;
