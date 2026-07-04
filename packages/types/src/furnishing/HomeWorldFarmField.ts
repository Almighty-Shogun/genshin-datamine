import type { HomeWorldFieldType } from './common';

export type HomeWorldFarmField = {
    fieldGadgetID: number;
    fieldItemID: number;
    fieldSlotGadgetID: number[];
    fieldSlotNum: number;
    fieldType: HomeWorldFieldType;
};
