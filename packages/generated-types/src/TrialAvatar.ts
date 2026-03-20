import type { ObfuscatedValue } from './common';

export type TrialAvatar = {
    hideIcon: boolean;
    isDynamicLevel: boolean;
    specifiedCostumeId: number;
    trialAvatarId: number;
    trialAvatarParamList: number[];
    trialSkillDepotId: number;
} & ObfuscatedValue;
