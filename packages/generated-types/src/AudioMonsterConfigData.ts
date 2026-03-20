import type { ObfuscatedValue } from './common';

export type AudioMonsterConfigData = {
    describeId: number;
    factorDyngainRange: number;
    mkCurveMin: number;
    mkRad: number;
    monsterIntensityRevise: number;
    score: number;
    tStateHoldExtraMstr: number;
} & ObfuscatedValue;
