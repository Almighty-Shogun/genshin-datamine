export type RandomQuestElemPool = {
    id: number;
    poolId: number;
    sampleList: {
        content: string;
        type: string;
    }[];
    weight: number;
};
