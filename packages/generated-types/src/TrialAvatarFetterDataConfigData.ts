export type TrialAvatarFetterDataConfigData = {
    avatarId: number;
    fetterId: number;
    finishCond: {
        condType: string;
        paramList: number[];
    };
};
