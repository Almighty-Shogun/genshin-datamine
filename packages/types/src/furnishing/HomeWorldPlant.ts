export type HomeWorldGather = {
    bundleID: number;
    dropID: number;
    homeGatherID: number;
    weight: number;
};

export type HomeWorldPlant = {
    bundleID: number;
    collectNum: number;
    configHomeGather: HomeWorldGather[];
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
