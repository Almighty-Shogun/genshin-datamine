export type Fetters = {
    avatarId: number;
    fetterId: number;
    finishConds: unknown[];
    hideCostumeList: number[];
    isHiden: boolean;
    openConds: {
        condType: string;
        paramList: number[];
    }[];
    showCostumeList: number[];
    tips: number[];
    type: number;
    voiceFile: string;
    voiceFileTextTextMapHash: number;
    voiceTitleLockedTextMapHash: number;
    voiceTitleTextMapHash: number;
};
