export type DungeonPass = {
    conds: {
        condType: string;
        param: number[];
    }[];
    id: number;
    logicType: string;
};
