import type { ObfuscatedValue } from './common';

export type HandbookQuestGuide = {
    chapterID: number;
    guideID: number;
    icon: string;
    labelTextMapHash: number;
    mainQuestID: number;
    order: number;
    questType: string;
    showConds: {
        param: number[];
        type: string;
    }[];
    showLabelTip: boolean;
    specialGuideID: number;
    typeID: number;
} & ObfuscatedValue;
