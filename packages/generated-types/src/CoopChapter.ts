export type CoopChapter = {
    avatarId: number;
    avatarSortId: number;
    beginTimeStr: string;
    chapterIcon: string;
    chapterNameTextMapHash: number;
    chapterSortId: number;
    confidenceValue: number;
    coopPageTitleTextMapHash: number;
    graphXRatio: number;
    graphYRatio: number;
    id: number;
    openMaterialId: number;
    openMaterialNum: number;
    pointGraphPath: string;
    unlockCond: {
        args: number[];
        condType: string;
    }[];
    unlockCondTips: number[];
};
