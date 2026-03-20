import type { ObfuscatedValue } from './common';

export type ThemeParkSimStage = {
    stageId: number;
    titleTextMapHash: number;
    unlockDay: number;
    watcherList: number[];
} & ObfuscatedValue;
