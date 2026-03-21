import type { ObfuscatedValue } from '../common';

export type Language =
    | "LANGUAGE_EN"
    | "LANGUAGE_SC"
    | "LANGUAGE_TC"
    | "LANGUAGE_FR"
    | "LANGUAGE_DE"
    | "LANGUAGE_ES"
    | "LANGUAGE_PT"
    | "LANGUAGE_RU"
    | "LANGUAGE_JP"
    | "LANGUAGE_KR"
    | "LANGUAGE_TH"
    | "LANGUAGE_VN"
    | "LANGUAGE_ID"
    | "LANGUAGE_TR"
    | "LANGUAGE_IT";

export type AvatarDefaultName = {
    languageType: Language;
    planeText: string;
};

export type AvatarRename = {
    iconPath: string;
    keywordEasterEggGroupList: number[];
    multiLangDefaultNameList: AvatarDefaultName[];
    relatedAvatarID: number;
    renameID: number;
    renameItemID: number;
    renamePreQuestID: number;
    renameQuestID: number;
    tmpValueKey: string;
} & ObfuscatedValue;
