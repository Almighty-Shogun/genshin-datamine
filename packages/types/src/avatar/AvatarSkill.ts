import type { ObfuscatedValue, Element, TextMapHash } from '../common';

export type AvatarSkill = {
    abilityName: string;
    buffIcon: string;
    cdSlot: null;
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
    triggerID: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
