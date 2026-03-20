import type { ObfuscatedValue } from './common';

export type GCGRule = {
    clientProgressBarBufferTime: number;
    clientProgressBarTailScaleFactor: number;
    clientShowCountDownTime: number;
    disconnectTimeOut: number;
    drawCardNum: number;
    elementReactionList: number[];
    handCardLimit: number;
    id: number;
    initTimeOut: number;
    rollBonusTime: number;
    roundTime: number;
    startBonusTime: number;
} & ObfuscatedValue;
