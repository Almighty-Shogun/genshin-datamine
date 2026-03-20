export type RogueDungeonCell = {
    id: number;
    dungeonId: number;
    cellId: number;
    cellCenterPos: number[];
    mapCoordinate: number[];
    adjacencyCellList: number[];
    groupId: number;
    weightId: number;
    operatorDeltaY: number;
    doorOffset: number;
    doorDeltaY: number;
    specialType: string;
    isInitCell: boolean;
};
