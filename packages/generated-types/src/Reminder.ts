import type { ObfuscatedValue } from './common';

export type Reminder = {
    delay: number;
    hasAudio: boolean;
    id: number;
    nextReminderId: number;
    showTime: number;
    soundEffect: string;
    style: string;
} & ObfuscatedValue;
