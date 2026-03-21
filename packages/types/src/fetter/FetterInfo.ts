import type { TriggerCondition } from './common';
import type { ObfuscatedValue } from '../common';

export type AvatarAssociationType =
    | "ASSOC_TYPE_INAZUMA"
    | "ASSOC_TYPE_MONDSTADT"
    | "ASSOC_TYPE_MAINACTOR"
    | "ASSOC_TYPE_LIYUE"
    | "ASSOC_TYPE_FATUI"
    | "ASSOC_TYPE_RANGER"
    | "ASSOC_TYPE_SUMERU"
    | "ASSOC_TYPE_FONTAINE"
    | "ASSOC_TYPE_NATLAN"
    | "ASSOC_TYPE_OMNI_SCOURGE"
    | "ASSOC_TYPE_NODKRAI"
    | "ASSOC_TYPE_NODKRAI_ZIBAI";

export type FetterInfoFinishConditionType =
    | "FETTER_COND_NOT_OPEN"
    | "FETTER_COND_FINISH_QUEST"
    | "FETTER_COND_AVATAR_LEVEL";

export type FetterInfo = {
    avatarAssocType: AvatarAssociationType;
    avatarConstellationAfterTextMapHash: number;
    avatarConstellationBeforeTextMapHash: number;
    avatarDetailTextMapHash: number;
    avatarId: number;
    avatarNativeTextMapHash: number;
    avatarTitleTextMapHash: number;
    avatarVisionAfterTextMapHash: number;
    avatarVisionBeforeTextMapHash: number;
    cvChineseTextMapHash: number;
    cvEnglishTextMapHash: number;
    cvJapaneseTextMapHash: number;
    cvKoreanTextMapHash: number;
    fetterId: number;
    finishConds: TriggerCondition<FetterInfoFinishConditionType>[];
    infoBirthDay: number;
    infoBirthMonth: number;
    isHiden: boolean;
    openConds: unknown[];
} & ObfuscatedValue;
