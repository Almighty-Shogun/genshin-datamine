export type EnvAnimalGather = {
    aliveTime: number;
    animalId: number;
    areaId: number;
    entityType: string;
    escapeRadius: number;
    escapeTime: number;
    excludeWeathers: string;
    gatherItemList: {
        count: number;
        id: number;
    }[];
    radius: number;
};
