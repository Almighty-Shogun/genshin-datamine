import type { ObfuscatedValue } from './common';

export type FurnitureMake = {
    configID: number;
    count: number;
    exp: number;
    furnitureItemID: number;
    makeTime: number;
    materialItems: {
        count: number;
        id: number;
    }[];
    maxAccelerateTime: number;
} & ObfuscatedValue;
