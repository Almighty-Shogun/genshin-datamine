export type RoguelikeCard = {
    id: number;
    sortOrder: number;
    type: string;
    relatedRuneList: number[];
    relatedElementList: string[];
    effectConfig: {
        effectType: string;
        effectKey: string;
        effectParam: string;
        displayOffset: number;
    };
    cardNameTextMapHash: number;
    descTextMapHash: number;
    extraDescTextMapHash: number;
    descParamList: number[];
    descParamSuperpositionList: boolean[];
    descParamBaseValueList: number[];
    label: string;
    isClearAtNextLevel: boolean;
};
