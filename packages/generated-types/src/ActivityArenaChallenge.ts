import type { ObfuscatedValue } from './common';

export type ActivityArenaChallenge = {
    arenaChallengeId: number;
    arenaChallengeLevel: number;
    challengeDesc: string;
    challengeDesc1: string;
    challengeDesc2: string;
    challengeTarget1TextMapHash: number;
    challengeTarget2TextMapHash: number;
    challengeTargetTextMapHash: number;
    galleryId: number;
    id: number;
    isExtraLevel: boolean;
    scheduleId: number;
    watcherId: number;
} & ObfuscatedValue;
