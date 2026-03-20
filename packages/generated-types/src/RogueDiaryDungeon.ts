export type RogueDiaryDungeon = {
    dungeonId: number;
    groupList: number[];
    roundList: {
        roomCount: number;
        roundRoomConfigList: number[];
        hpCorrection: number;
    }[];
};
