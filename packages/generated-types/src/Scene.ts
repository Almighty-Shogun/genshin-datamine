import type { ObfuscatedValue } from './common';

export type Scene = {
    boundaryPointVec: number[];
    comment: string;
    dungeonEntryPoint: number[];
    entityAppearSorted: number;
    id: number;
    ignoreNavMesh: boolean;
    imageSceneId: number;
    isAllowMapMarkPoint: boolean;
    levelEntityConfig: string;
    maxSpecifiedAvatarNum: number;
    mpType: string;
    navmeshMode: string;
    overrideDefaultProfile: string;
    overrideVisionLevelType: string;
    safePoint: number;
    sceneFixTime: number;
    scriptData: string;
    specifiedAvatarList: number[];
    subtype: string;
    type: string;
    useToTheMoon: boolean;
    worldSceneId: number;
} & ObfuscatedValue;
