import type { ObfuscatedValue } from '../common';
import type { HomeWorldSceneType } from './common';

export type HomeWorldFurnitureType = {
    bagPageOnly: number;
    cameraID: number;
    isShowInBag: boolean;
    sceneType: HomeWorldSceneType;
    tabIcon: string;
    typeCategoryID: number;
    typeID: number;
    typeName2TextMapHash: number;
    typeNameTextMapHash: number;
} & ObfuscatedValue;
