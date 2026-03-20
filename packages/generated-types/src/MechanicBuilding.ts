export type MechanicBuilding = {
    id: number;
    gadgetId: number;
    specialEffectLevel1: number;
    specialEffectLevel2: number;
    specialEffectDesc1TextMapHash: number;
    specialEffectDesc2TextMapHash: number;
    maxLevel: number;
    openConds: {
        key: string;
        value: number;
    }[];
    defaultDungeonList: number[];
    elementType: number;
    isEnableRotate: boolean;
    buildLimit: number;
};
