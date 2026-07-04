export type FishBaitFeature = {
    bonusRange: number;
    featureTag: number;
    weight: number;
};

export type FishBait = {
    featureList: FishBaitFeature[];
    id: number;
    poolIdList: number[];
    sort: number;
};
