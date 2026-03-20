export type FetterStory = {
    avatarId: number;
    fetterId: number;
    finishConds: {
        condType: string;
        paramList: number[];
    }[];
    isHiden: boolean;
    openConds: {
        condType: string;
        paramList: number[];
    }[];
    storyContext2TextMapHash: number;
    storyContextTextMapHash: number;
    storyTitle2TextMapHash: number;
    storyTitleLockedTextMapHash: number;
    storyTitleTextMapHash: number;
    tips: number[];
};
