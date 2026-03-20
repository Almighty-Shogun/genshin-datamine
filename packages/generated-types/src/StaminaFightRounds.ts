import type { ObfuscatedValue } from './common';

export type StaminaFightRounds = {
    id: number;
    keyMonsterPreviewIdList: number[];
    monsterPreviewIdList: number[];
    scheduleId: number;
    trialAvatarIdList: number[];
} & ObfuscatedValue;
