import type { ObfuscatedValue } from './common';

export type ActivityChessCard = {
    cardCount: number;
    cardNameTextMapHash: number;
    cardNumericalModificationMode: string;
    cardNumericalModificationType: string;
    cardNumericalModificationValue: number;
    cardQualityType: string;
    cardType: string;
    costPoints: number;
    curseWeight: number;
    descParamList: number[][];
    descParamSuperpositionList: boolean[];
    descTextMapHash: number;
    effect: {
        effectParam1: number;
        effectParam2: number;
        effectStrParam: string;
        effectType: string;
        targetParamList: number[];
        targetType: string;
    };
    extraDesc2TextMapHash: number;
    extraDescTextMapHash: number;
    extraEffectList: {
        effectParam1: number;
        effectParam2: number;
        effectStrParam: string;
        effectType: string;
        targetParamList: unknown[];
        targetType: string;
    }[];
    id: number;
    isCanAttachCurse: boolean;
    isShowOnPick: boolean;
    needChessLevel: number;
    number: number;
    tag: string;
} & ObfuscatedValue;
