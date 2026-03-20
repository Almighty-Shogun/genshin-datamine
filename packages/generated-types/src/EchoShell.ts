import type { ObfuscatedValue } from './common';

export type EchoShell = {
    dungeonPassedLockTipTextMapHash: number;
    echoShellType: string;
    exclusiveSceneTags: number[];
    id: number;
    imagePath: string;
    markID: number;
    markPosition: number[];
    markTipContentTextMapHash: number;
    markTipTitleTextMapHash: number;
    orderID: number;
    relatedDungeonEntryIDList: number[];
    relatedDungeonID: number;
    relatedSubQuestID: number;
    reminderList: number[];
    storyId: number;
    voiceDescTextMapHash: number;
    voiceList: number[];
    voiceTitleTextMapHash: number;
} & ObfuscatedValue;
