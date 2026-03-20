export type Fireworks = {
    detailedDescTextMapHash: number;
    explodeEffectNameList: string[];
    fireworksType: string;
    liftOffEffectName: string;
    materialID: number;
    reformParamList: {
        isCanReform: boolean;
        standardValue: number;
        type: string;
        valueRange: number[];
    }[];
};
