import type { ObfuscatedValue, Element, TextMapHash } from '../common';

export type AvatarSkill = {
    abilityName: string;
    buffIcon: string;
    cdSlot: number;
    cdTime: number;
    costElemType: Element;
    costElemVal: number;
    costStamina: number;
    dragType: "DRAG_NONE" | "DRAG_ROTATE_CAMERA" | "DRAG_ROTATE_CHARACTER";
    energyMin: number;
    extraDescTextMapHash: number;
    globalValueKey: string;
    id: number;
    isAttackCameraLock: boolean;
    lockShape: string;
    lockWeightParams: number[];
    maxChargeNum: number;
    needMonitor: "MONITOR_NEVER" | "MONITOR_OFF_STAGE" | "MONITOR_ON_STAGE";
    proudSkillGroupId: number;
    shareCDID: number;
    skillIcon: string;
    specialEnergyMax: number;
    specialEnergyMin: number;
    specialEnergyType: "SPECIAL_ENERGY_NONE" | "SPECIAL_ENERGY_MAVUIKA" | "SPECIAL_ENERGY_SKIRK";
    triggerID: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
