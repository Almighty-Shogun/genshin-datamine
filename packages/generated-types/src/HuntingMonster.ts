import type { ObfuscatedValue } from './common';

export type HuntingMonster = {
    abilityGroup: string;
    affix: number[];
    cityList: number[];
    clueTextIdList: number[];
    configId: number;
    createPosType: string;
    difficulty: string;
    initialPose: number;
    isDisableWandering: boolean;
    level: number;
    limitTime: number;
    mechanismDesc1TextMapHash: number;
    mechanismDesc2TextMapHash: number;
    mechanismTitle1TextMapHash: number;
    mechanismTitle2TextMapHash: number;
    monsterId: number;
    newsTextTextMapHash: number;
    refreshCond: {
        condType: string;
        param: unknown[];
    }[];
    reviseLevelId: number;
    routeId: number;
    searchPointNum: number;
    suiteId: number[];
    traitTextTextMapHash: number;
} & ObfuscatedValue;
