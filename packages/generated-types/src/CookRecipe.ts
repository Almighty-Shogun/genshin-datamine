export type CookRecipe = {
    cookMethod: string;
    descTextMapHash: number;
    effectDesc: number[];
    foodType: string;
    icon: string;
    id: number;
    inputVec: {
        count: number;
        id: number;
    }[];
    isDefaultUnlocked: boolean;
    maxProficiency: number;
    nameTextMapHash: number;
    qteParam: string;
    qteQualityWeightVec: number[];
    qualityOutputVec: {
        count: number;
        id: number;
    }[];
    rankLevel: number;
};
