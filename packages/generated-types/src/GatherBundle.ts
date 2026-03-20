export type GatherBundle = {
    id: number;
    bundleName: string;
    baseGadgetId: number;
    points: {
        pointID: number;
        pointType: number;
        offsetX: number;
        offsetY: number;
        offsetZ: number;
        rotY: number;
        rotX: number;
        rotZ: number;
    }[];
};
