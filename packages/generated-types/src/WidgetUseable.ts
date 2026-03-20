import type { ObfuscatedValue } from './common';

export type WidgetUseable = {
    canUseInOtherWorld: boolean;
    dungeonTypeWhiteList: number[];
    forbiddenDungeonPlayTypeList: number[];
    forbiddenDungeonTypeList: number[];
    forbiddenSceneIdList: number[];
    materialID: number;
    vehicleLimit: string;
} & ObfuscatedValue;
