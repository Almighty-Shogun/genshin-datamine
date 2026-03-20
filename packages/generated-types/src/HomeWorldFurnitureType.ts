import type { ObfuscatedValue } from './common';

export type HomeWorldFurnitureType = {
    bagPageOnly: number;
    cameraID: number;
    isShowInBag: boolean;
    sceneType: string;
    tabIcon: string;
    typeCategoryID: number;
    typeID: number;
    typeName2TextMapHash: number;
    typeNameTextMapHash: number;
} & ObfuscatedValue;
