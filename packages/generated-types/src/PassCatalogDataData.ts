export type PassCatalogDataData = {
    id: number;
    isTransport: boolean;
    passGroup: number;
    regionID: string;
    regionType: string;
    sceneid: number;
    targetPoint: string;
    unlockWatcher: number;
    upFlowPass: {
        id: number;
        pathPoint: string;
        unlockWatcher: number;
        weight: number;
    }[];
};
