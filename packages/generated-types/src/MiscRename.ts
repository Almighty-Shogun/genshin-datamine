import type { ObfuscatedValue } from './common';

export type MiscRename = {
    iconPath: string;
    keywordEasterEggGroupList: number[];
    multiLangDefaultNameList: {
        languageType: string;
        planeText: string;
    }[];
    renameID: number;
    renameItemID: number;
    renamePreQuestID: number;
    renameQuestID: number;
    tmpValueKey: string;
} & ObfuscatedValue;
