import type { ObfuscatedValue } from './common';

export type ElectroherculesBattleV3Level = {
    difficulty: string;
    draftId: number;
    galleryId: number;
    groupId: number;
    levelId: number;
    levelType: string;
    matchId: number;
    stageId: number;
    watcherIdList: number[];
} & ObfuscatedValue;
