import type { CostItem, ObfuscatedValue } from '../common';

export type FurnitureMake = {
    configID: number;
    count: number;
    exp: number;
    furnitureItemID: number;
    makeTime: number;
    materialItems: CostItem[];
    maxAccelerateTime: number;
} & ObfuscatedValue;
