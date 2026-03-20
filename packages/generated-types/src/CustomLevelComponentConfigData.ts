import type { ObfuscatedValue } from './common';

export type CustomLevelComponentConfigData = {
    brickName: string;
    brickType: string;
    browseSortOrder: number;
    canCopy: boolean;
    componentCost: number;
    componentDeployTextMapHash: number;
    componentDescTextMapHash: number;
    componentIconHash: number;
    componentID: number;
    componentNameTextMapHash: number;
    componentSizeTextMapHash: number;
    configLevel: number;
    deployGadgetID: number;
    isVisable: boolean;
    rotateType: string;
    serverGadgetID: number;
    tagDescTextMapHash: number;
    typeID: number;
} & ObfuscatedValue;
