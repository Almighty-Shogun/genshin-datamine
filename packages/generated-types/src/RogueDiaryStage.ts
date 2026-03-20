export type RogueDiaryStage = {
    id: number;
    condId: number;
    normalDungeonIdList: number[];
    hardDungeonIdList: number[];
    insaneDungeonIdList: number[];
    optionalCardCount: number;
    chosenCardCount: number;
    tiredType: string;
    tiredReserveAvatarCount: number;
    trialAvatarList: number[];
    timeLevelList: number[];
    watcherIdList: number[];
    pushTipsId: number;
    dungeonNameTextMapHash: number;
    dungeonDescTextMapHash: number;
    tiredRoundCount: number;
};
