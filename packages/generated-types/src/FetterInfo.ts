import type { ObfuscatedValue } from './common';

export type FetterInfo = {
    avatarAssocType: string;
    avatarConstellationAfterTextMapHash: number;
    avatarConstellationBeforTextMapHash: number;
    avatarDetailTextMapHash: number;
    avatarId: number;
    avatarNativeTextMapHash: number;
    avatarTitleTextMapHash: number;
    avatarVisionAfterTextMapHash: number;
    avatarVisionBeforTextMapHash: number;
    cvChineseTextMapHash: number;
    cvEnglishTextMapHash: number;
    cvJapaneseTextMapHash: number;
    cvKoreanTextMapHash: number;
    fetterId: number;
    finishConds: {
        condType: string;
        paramList: number[];
    }[];
    infoBirthDay: number;
    infoBirthMonth: number;
    isHiden: boolean;
    openConds: unknown[];
} & ObfuscatedValue;
