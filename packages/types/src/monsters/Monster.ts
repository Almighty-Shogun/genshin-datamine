import type { ControllerPath, FightingProp, ObfuscatedValue } from '../common';
import type { MonsterGrowCurveType, MonsterSecurityLevel, MonsterType, MonsterVisionLevel } from './common';

export type MonsterHpDrop = {
    dropId: number;
    hpPercent: number;
};

export type MonsterGrowCurve = {
    growCurve: MonsterGrowCurveType;
    type: FightingProp;
};

export type Monster = {
    affix: number[];
    ai: string;
    attackBase: number;
    campID: number;
    canSwim: boolean;
    combatBGMLevel: 0 | 1 | 2 | 3 | 4 | 5 | 7 | 9;
    combatConfigHash: number;
    critical: number;
    criticalHurt: number;
    defenseBase: number;
    deformationMeshPathHash: number;
    describeId: number;
    elecSubHurt: number;
    elementMastery: number;
    entityBudgetLevel: number;
    equips: number[];
    excludeWeathers: string;
    featureTagGroupID: number;
    fireSubHurt: number;
    grassSubHurt: number;
    hideNameInElementView: boolean;
    hpBase: number;
    hpDrops: MonsterHpDrop[];
    iceSubHurt: number;
    id: number;
    isAIHashCheck: boolean;
    isInvisibleReset: boolean;
    killDropId: number;
    lodPatternName: string;
    monsterName: string;
    mpPropID: number;
    nameTextMapHash: number;
    physicalSubHurt: number;
    playType: "BEYOND" | "DEFAULT";
    prefabPathHash: number;
    prefabPathRagdollHash: number;
    prefabPathRemoteHash: number;
    propGrowCurves: MonsterGrowCurve[];
    radarHintID: number;
    rockSubHurt: number;
    safetyCheck: boolean;
    scriptDataPathHash: number;
    securityLevel: MonsterSecurityLevel;
    serverScript: string;
    skin: string;
    type: MonsterType;
    visionLevel: MonsterVisionLevel;
    waterSubHurt: number;
    windSubHurt: number;
} & ObfuscatedValue & ControllerPath;
