import type { ObfuscatedValue } from './common';

export type ActivitySkill = {
    abilityName: string;
    cdTime: number;
    channelTextTextMapHash: number;
    energyMax: number;
    energyMin: number;
    globalValueKey: string;
    guideKey: string[];
    guideOpenState: string;
    id: number;
    interruptTextTextMapHash: number;
    shareCDID: number;
    skillChargePhase: number[];
    skillEffectHightLight: boolean;
    skillIcon: string;
    skillTarget: string;
    unableTextTextMapHash: number;
    vfxIndex: number;
} & ObfuscatedValue;
