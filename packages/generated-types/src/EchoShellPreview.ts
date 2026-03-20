import type { ObfuscatedValue } from './common';

export type EchoShellPreview = {
    activityId: number;
    id: number;
    specialVoiceID: number;
    specialVoiceLockTipTextMapHash: number;
    specialVoiceUnlockCondID: number;
} & ObfuscatedValue;
