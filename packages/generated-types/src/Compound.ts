export type Compound = {
    costTime: number;
    countDescTextMapHash: number;
    descTextMapHash: number;
    dropId: number;
    groupID: number;
    icon: string;
    id: number;
    inputVec: {
        count: number;
        id: number;
    }[];
    isDefaultUnlocked: boolean;
    nameTextMapHash: number;
    outputVec: {
        count: number;
        id: number;
    }[];
    queueSize: number;
    rankLevel: number;
    type: string;
};
