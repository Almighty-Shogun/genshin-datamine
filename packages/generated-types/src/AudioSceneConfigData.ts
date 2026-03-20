import type { ObfuscatedValue } from './common';

export type AudioSceneConfigData = {
    atkEnableDistExpand: number;
    dynVARGainRatioMax: number;
    factorTStateHoldMax: number;
    hiThreatVThreshold: number;
    id: number;
    mtThreatVTakenRatio: number;
    sceneID: number;
    stateVMathInit: number;
    stateVMathRlsBaserate: number;
    varThreshold: number;
    worldAreaID: number;
} & ObfuscatedValue;
