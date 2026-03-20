import type { ObfuscatedValue } from './common';

export type Forge = {
    effectiveWorldLevels: number[];
    forgePoint: number;
    forgePointNoticeTextMapHash: number;
    forgeTime: number;
    forgeType: number;
    id: number;
    isDefaultShow: boolean;
    mainRandomDropId: number;
    materialItems: {
        count: number;
        id: number;
    }[];
    playerLevel: number;
    priority: number;
    queueNum: number;
    randomItems: {
        count: number;
        itemId: number;
        weight: number;
    }[];
    resultItemCount: number;
    resultItemId: number;
    scoinCost: number;
    showConsumeItemId: number;
    showItemId: number;
} & ObfuscatedValue;
