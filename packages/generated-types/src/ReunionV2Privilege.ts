export type ReunionV2Privilege = {
    dailyNum: number;
    id: number;
    privilegeType: {
        dailyNum: number;
        subType: string;
        totalNum: number;
        type: string;
    }[];
    totalNum: number;
};
