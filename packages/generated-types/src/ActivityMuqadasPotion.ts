import type { ObfuscatedValue } from './common';

export type ActivityMuqadasPotion = {
    activityId: number;
    activitySkillId: number;
    capturePerTime: number;
    captureTotalTime: number;
    delayClosePageTime: number;
    ditherRatio: number;
    energyLimit: number;
    levelTimeLimit: number;
    normalBorderEffectPath: string;
    normalCoreEffectPath: string;
    normalFadeEffectPath: string;
    normalLockEffectPath: string;
    onceCaptureLimit: number;
    scanAreaXRatio: number;
    scanAreaYRatio: number;
    skillNumLimit: number;
    specialBorderEffectPath: string;
    specialCoreEffectPath: string;
    specialFadeEffectPath: string;
    specialLockEffectPath: string;
    specialPointRatio: number;
    speedUpThreshold: number;
} & ObfuscatedValue;
