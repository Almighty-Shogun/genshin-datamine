import type { ObfuscatedValue } from './common';

export type ActivityHachiStage = {
    battleChallengeIndex: number;
    battleDescTextMapHash: number;
    battleGroup: string;
    battleMarkPos: number[];
    battlePushTips: number;
    battleRadius: number;
    battleWatcher: number;
    finalQuestId: number[];
    id: number;
    mapMarkLoadQuest: number[];
    openDay: number;
    pushTip: number;
    questDescTextMapHash: number;
    questId: number[];
    questTitleTextMapHash: number;
    stageId: number;
    stealthChallengeIndex: number;
    stealthGroup: string;
    stealthMarkPos: number[];
    stealthRadius: number;
    stealthTitleTextMapHash: number;
    stealthTriggerPointMarkPos: number[];
    stealthWatcher: number;
} & ObfuscatedValue;
