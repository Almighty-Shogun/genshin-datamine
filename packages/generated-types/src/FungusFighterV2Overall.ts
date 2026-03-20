import type { ObfuscatedValue } from './common';

export type FungusFighterV2Overall = {
    abilityStatesBanSkill: string[];
    animatorParamBanSkill: string;
    chooseMonsterNumLimit: number;
    condSequelAccepted: number;
    condSequelFinished: number;
    condSequelUnlock: number;
    groundGadgetConfigId: number;
    guideQuestId: number;
    id: number;
    levelReminderSgvKey: string;
    mechanismPushtipsId: number;
    pushtipsId: number;
    sequelQuestID: number;
    skillPointLimit: number;
    trialAvatarId: number;
} & ObfuscatedValue;
