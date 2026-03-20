import type { ObfuscatedValue } from './common';

export type Gather = {
    areaId: number;
    extraItemIdVec: number[];
    gadgetId: number;
    initDisableInteract: boolean;
    isForbidGuest: boolean;
    itemId: number;
    pointLocation: string;
    pointType: number;
    refreshId: number;
    saveType: string;
    specialGathering: boolean;
} & ObfuscatedValue;
