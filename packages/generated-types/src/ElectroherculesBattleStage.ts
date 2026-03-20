import type { ObfuscatedValue } from './common';

export type ElectroherculesBattleStage = {
    enemyHerculesHeadIcon: string;
    enemyHerculesNameTextMapHash: number;
    firstSettleHardNPCCommentTextMapHash: number;
    firstSettleNPCCommentTextMapHash: number;
    id: number;
    levelDocTextMapHash: number;
    levelIdList: number[];
    levelTitleTextMapHash: number;
    openTime: number;
    pushTipsId: number;
    selfHerculesHeadIconFemale: string;
    selfHerculesHeadIconMale: string;
    selfHerculesNameTextMapHash: number;
    stageType: string;
} & ObfuscatedValue;
