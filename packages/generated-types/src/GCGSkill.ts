import type { ObfuscatedValue } from './common';

export type GCGSkill = {
    behaviourGoldenSkin: string;
    behaviourNormalSkin: string;
    chooseTargetList: number[];
    costList: {
        costType: string;
        count: number;
    }[];
    descTextMapHash: number;
    energyRecharge: number;
    id: number;
    isHidden: boolean;
    isNotTriggerActionPost: boolean;
    nameTextMapHash: number;
    notActive: boolean;
    skillConfirmIconSide: string;
    skillIconHash: number;
    skillIconTriggerTime: number;
    skillIconTriggerType: string;
    skillJson: string;
    skillTagList: string[];
    voiceTriggerId: number;
} & ObfuscatedValue;
