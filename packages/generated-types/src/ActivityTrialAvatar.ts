import type { ObfuscatedValue } from './common';

export type ActivityTrialAvatar = {
    id: number;
    scheduleId: number;
    trialAvatarIdList: number[];
} & ObfuscatedValue;
