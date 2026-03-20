import type { ObfuscatedValue } from './common';

export type FungusFighterV3Overall = {
    abilityStatesBanSkill: string[];
    animatorParamBanSkill: string;
    bossPushTipsId: number;
    chooseMonsterNumLimit: number;
    groundGadgetConfigId: number;
    guideQuestId: number;
    id: number;
    levelReminderSgvKey: string;
    skillPointLimit: number;
    trialAvatarId: number;
} & ObfuscatedValue;
