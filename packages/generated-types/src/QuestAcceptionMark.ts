import type { ObfuscatedValue } from './common';

export type QuestAcceptionMark = {
    acceptableTimeTipsTextMapHash: number;
    blockMP: boolean;
    configId: number;
    descTextMapHash: number;
    fallbackPosition: number[];
    isDailyNpc: boolean;
    npcId: number;
    sceneId: number;
    subQuestId: number;
} & ObfuscatedValue;
