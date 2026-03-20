export type CustomGadgetSlotLevelTagConfigData = {
    customGadgetType: string;
    gadgetId: number;
    id: number;
    levelTagID: number;
    slotMap: {
        slotIdentifier: string;
        slotList: number[];
    }[];
};
