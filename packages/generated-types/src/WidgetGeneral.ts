import type { ObfuscatedValue } from './common';

export type WidgetGeneral = {
    canUseInOtherWorld: boolean;
    dungeonTypeWhiteList: number[];
    forbiddenDungeonPlayTypeList: number[];
    forbiddenDungeonTypeList: number[];
    forbiddenSceneIdList: number[];
    materialID: number;
    tagList: number[];
    vehicleLimit: string;
} & ObfuscatedValue;
