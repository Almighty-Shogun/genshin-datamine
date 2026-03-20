import type { ObfuscatedValue } from './common';

export type AgentReconLevel = {
    activityID: number;
    levelID: number;
    levelType: string;
    nameTextMapHash: number;
    openDay: number;
    questList: number[];
    watcherList: number[];
} & ObfuscatedValue;
