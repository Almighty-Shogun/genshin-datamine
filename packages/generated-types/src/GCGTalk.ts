import type { ObfuscatedValue } from './common';

export type GCGTalk = {
    elementBrustTalkId: number;
    gameID: number;
    happyTalkId: number;
    highHealthTalkId: number;
    highHealthValue: number;
    lowHealthTalkId: number;
    lowHealthValue: number;
    sadTalkId: number;
    toughTalkId: number;
} & ObfuscatedValue;
