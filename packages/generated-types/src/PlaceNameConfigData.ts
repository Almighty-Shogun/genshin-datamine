import type { ObfuscatedValue } from './common';

export type PlaceNameConfigData = {
    actionType: string;
    conditionParam1: string;
    conditionParam2: string;
    conditionType: string;
    id: number;
    mapTagType: string;
    placeNameID: string;
    subAreaID: number;
    switchNameTextMapHash: number;
    type: string;
} & ObfuscatedValue;
