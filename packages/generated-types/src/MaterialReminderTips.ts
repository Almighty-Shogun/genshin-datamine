import type { ObfuscatedValue } from './common';

export type MaterialReminderTips = {
    materialId: number;
    openState: string;
    pushtipsId: number;
    reminderId: number;
} & ObfuscatedValue;
