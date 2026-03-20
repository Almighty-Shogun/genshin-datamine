import type { ObfuscatedValue } from './common';

export type GCGGame = {
    cardGroupId: number;
    enemyCardGroupId: number;
    gameType: string;
    guideName: string;
    id: number;
    initHand: string;
    isIgnoreDicePhase: boolean;
    loadingSituationConfigId: number;
    modeType: string;
    oppoPlayerNameTextMapHash: number;
    ruleId: number;
} & ObfuscatedValue;
