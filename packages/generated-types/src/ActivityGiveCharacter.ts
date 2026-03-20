import type { ObfuscatedValue } from './common';

export type ActivityGiveCharacter = {
    characterId: number;
    id: number;
    materialId: number;
    prefabPath: string;
    preQuestId: number;
    scheduleId: number;
    voiceIndexList: number[];
} & ObfuscatedValue;
