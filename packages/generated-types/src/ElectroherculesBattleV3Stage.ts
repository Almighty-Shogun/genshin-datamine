import type { ObfuscatedValue } from './common';

export type ElectroherculesBattleV3Stage = {
    enemyHerculesHeadIcon: string;
    enemyHerculesNameTextMapHash: number;
    firstSettleHardNPCCommentTextMapHash: number;
    firstSettleNPCCommentTextMapHash: number;
    id: number;
    levelNameTextMapHash: number;
    levelType: string;
    selfHerculesHeadIconFemale: string;
    selfHerculesHeadIconMale: string;
    selfHerculesNameTextMapHash: number;
    unlockDay: number;
} & ObfuscatedValue;
