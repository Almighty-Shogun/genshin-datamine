export type PhotographExpression = {
    avatarId: number;
    emotionDescriptionTextMapHash: number;
    emotionName: string;
    fetterId: number;
    finishConds: unknown[];
    icon: string;
    openConds: {
        condType: string;
        paramList: number[];
    }[];
    phonemeName: string;
    unlockDescTextMapHash: number;
};
