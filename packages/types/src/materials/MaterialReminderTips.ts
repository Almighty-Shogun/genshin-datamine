import type { ObfuscatedValue } from '../common';

export type MaterialReminderTips = {
    materialId: number;
    openState: "OPEN_STATE_NONE";
    pushtipsId: number;
    reminderId: number;
} & ObfuscatedValue;
