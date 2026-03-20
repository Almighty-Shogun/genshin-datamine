export type ReunionPrivilege = {
    dailyNum: number;
    id: number;
    privilegeType: {
        subType: string;
        type: string;
    }[];
    totalNum: number;
};
