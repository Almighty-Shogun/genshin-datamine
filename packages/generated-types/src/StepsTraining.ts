import type { ObfuscatedValue } from './common';

export type StepsTraining = {
    id: number;
    titleTextMapHash: number;
    trialAvatarIndexId: number;
} & ObfuscatedValue;
