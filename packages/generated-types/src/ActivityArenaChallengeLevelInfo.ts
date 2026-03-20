import type { ObfuscatedValue } from './common';

export type ActivityArenaChallengeLevelInfo = {
    challengeIdList: number[];
    id: number;
    levelDescParams: string;
    levelDescTextMapHash: number;
    levelDetailDescTextMapHash: number;
    levelHardChallengeDescParams: string;
    levelHardChallengeDescTextMapHash: number;
    levelId: number;
    levelNameTextMapHash: number;
    monsterConfig: string;
    monsterConfigHardChallenge: string;
    monsterPreviewId: number;
    monsterPreviewIdHardChallenge: number;
    openDay: number;
    scheduleId: number;
} & ObfuscatedValue;
