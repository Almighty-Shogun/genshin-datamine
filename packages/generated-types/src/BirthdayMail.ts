import type { ObfuscatedValue } from './common';

export type BirthdayMail = {
    id: number;
    mailId: number;
    rewardId: number;
    effectiveDate: string;
} & ObfuscatedValue;
