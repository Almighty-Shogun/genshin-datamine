import type { ObfuscatedValue } from './common';

export type GCGCharacterLevel = {
    avatarId: number;
    condQuestList: number;
    costCount: number;
    costItemId: number;
    hardLevelId: number;
    hardLossTalk: number;
    hardWinTalk: number;
    id: number;
    imageNameHash: number;
    isNeedUnlock: boolean;
    normalLevelId: number;
    normalLevelList: {
        gcgLevel: number;
        levelId: number;
    }[];
    normalLossTalk: number;
    normalWinTalk: number;
    npcId: number;
    preQuestId: number;
} & ObfuscatedValue;
