import type { ObfuscatedValue } from './common';

export type ProudSkill = {
    addProps: {
        propType: string;
        value: number;
    }[];
    breakLevel: number;
    coinCost: number;
    costItems: {
        count: number;
        id: number;
    }[];
    descTextMapHash: number;
    filterConds: string[];
    icon: string;
    isHideLifeProudSkill: boolean;
    level: number;
    lifeEffectParams: string[];
    lifeEffectType: string;
    nameTextMapHash: number;
    openConfig: string;
    paramDescList: number[];
    paramList: number[];
    proudSkillGroupId: number;
    proudSkillId: number;
    proudSkillType: number;
    unlockDescTextMapHash: number;
} & ObfuscatedValue;
