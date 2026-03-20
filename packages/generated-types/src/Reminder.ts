import type { ObfuscatedValue } from './common';

export type Reminder = {
    contentTextMapHash: number;
    delay: number;
    hasAudio: boolean;
    id: number;
    nextReminderId: number;
    showTime: number;
    soundEffect: string;
    speakerTextMapHash: number;
    style: string;
} & ObfuscatedValue;
