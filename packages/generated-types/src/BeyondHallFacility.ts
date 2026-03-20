import type { ObfuscatedValue } from './common';

export type BeyondHallFacility = {
    arrangeLimit: number;
    cost: number;
    descTextMapHash: number;
    discountCost: number;
    dropable: boolean;
    gadgetId: number;
    globalItemLimit: number;
    icon: string;
    id: number;
    itemType: string;
    nameTextMapHash: number;
    rank: number;
    rankLevel: number;
    stackLimit: number;
    surfaceType: string;
    useLevel: number;
    weight: number;
} & ObfuscatedValue;
