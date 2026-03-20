import type { ObfuscatedValue } from './common';

export type AkaFesOverall = {
    festivalWatcherList: number[];
    reasonButtonDisableTime: number;
    reasonLevelTalkId: number;
    reasonTypewriterSpeed: number;
    scheduleId: number;
    targetFestivalScore: number;
} & ObfuscatedValue;
