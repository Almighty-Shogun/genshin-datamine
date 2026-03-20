import type { ObfuscatedValue } from './common';

export type MonsterAffix = {
    abilityName: string[];
    affix: string;
    comment: string;
    entityBudgetLevel: number;
    generalSkillIcon: string;
    iconPath: string;
    id: number;
    isCommon: boolean;
    isLegal: string;
    preAdd: boolean;
    radarHintID: number;
} & ObfuscatedValue;
