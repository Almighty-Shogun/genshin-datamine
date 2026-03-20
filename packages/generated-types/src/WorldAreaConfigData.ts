import type { ObfuscatedValue } from './common';

export type WorldAreaConfigData = {
    areaID1: number;
    areaID2: number;
    areaNameTextMapHash: number;
    areaOffset: number[];
    areaType: string;
    elementType: string;
    guideEntrancePoint: number[];
    guideExitPoint: number[];
    id: number;
    isSpecialGuide: boolean;
    minimapScale: number;
    sceneID: number;
    showTips: boolean;
    teamAbilityGroupList: string[];
    terrainType: string;
    towerPointId: number;
} & ObfuscatedValue;
