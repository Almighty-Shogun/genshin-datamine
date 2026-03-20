import type { ObfuscatedValue } from './common';

export type QuestEventArchive = {
    icon: string;
    preQuestIdList: number[];
    sortOrder: number;
} & ObfuscatedValue;
