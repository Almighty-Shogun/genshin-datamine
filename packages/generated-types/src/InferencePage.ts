import type { ObfuscatedValue } from './common';

export type InferencePage = {
    conclusionList: number[];
    dialogGroupId: number;
    pageId: number;
    parentQuestId: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
