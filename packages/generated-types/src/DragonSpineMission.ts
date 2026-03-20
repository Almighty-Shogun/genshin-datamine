export type DragonSpineMission = {
    id: number;
    chapterId: number;
    watcherId: number;
    finishExec: {
        param: string[];
        type: string;
    }[];
};
