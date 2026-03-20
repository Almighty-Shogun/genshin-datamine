export type DungeonRosterConfigData = {
    id: number;
    openTimeStr: string;
    cycleTime: number;
    cycleType: string;
    rosterPool: {
        dungeonList: number[];
    }[];
};
