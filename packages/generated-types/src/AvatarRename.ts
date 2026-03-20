import type { ObfuscatedValue } from './common';

export type AvatarRename = {
    iconPath: string;
    keywordEasterEggGroupList: number[];
    multiLangDefaultNameList: {
        languageType: string;
        planeText: string;
    }[];
    relatedAvatarID: number;
    renameID: number;
    renameItemID: number;
    renamePreQuestID: number;
    renameQuestID: number;
    tmpValueKey: string;
} & ObfuscatedValue;
