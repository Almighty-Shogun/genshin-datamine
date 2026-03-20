export type HomeWorldPlant = {
    bundleID: number;
    collectNum: number;
    configHomeGather: {
        bundleID: number;
        dropID: number;
        homeGatherID: number;
        weight: number;
    }[];
    dropID: number;
    fieldID: number;
    gatherIdVec: number[];
    homeGatherID: number;
    inteeIconName: string;
    inteeNameTextMapHash: number;
    order: number;
    seedID: number;
    sproutGadgetID: number;
    sproutTime: number;
    time: number;
};
