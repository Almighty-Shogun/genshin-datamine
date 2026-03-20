import type { ObfuscatedValue } from './common';

export type KeywordEasterEgg = {
    configID: number;
    multiLangKeywordList: {
        languageType: string;
        planeText: string;
    }[];
} & ObfuscatedValue;
