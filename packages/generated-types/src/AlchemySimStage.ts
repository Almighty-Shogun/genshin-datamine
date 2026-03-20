import type { ObfuscatedValue } from './common';

export type AlchemySimStage = {
    stageID: number;
    titleTextMapHash: number;
    unlockTime: number;
    watcherList: number[];
} & ObfuscatedValue;
