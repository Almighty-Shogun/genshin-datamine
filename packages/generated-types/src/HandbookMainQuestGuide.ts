import type { ObfuscatedValue } from './common';

export type HandbookMainQuestGuide = {
    investigationTargetID: number;
    mainQuestGuideID: number;
    preMainQuestGuideIDList: number[];
} & ObfuscatedValue;
