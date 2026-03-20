export type IrodoriChessCard = {
    id: number;
    costPoints: number;
    effect: {
        targetType: string;
        targetParamList: number[];
        effectType: string;
        effectStrParam: string;
        effectParam1: number;
    };
    extraEffectList: {
        targetType: string;
        targetParamList: number[];
        effectType: string;
        effectStrParam: string;
        effectParam1: number;
    }[];
    cardType: string;
    tag: string;
    cardNameTextMapHash: number;
    descTextMapHash: number;
    descParam: number[];
    cardNumericalList: {
        cardNumericalModificationType: string;
        cardNumericalModificationMode: string;
        cardNumericalModificationValue: number;
    }[];
    cardQualityType: string;
};
