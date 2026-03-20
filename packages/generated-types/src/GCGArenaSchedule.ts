import type { ObfuscatedValue } from './common';

export type GCGArenaSchedule = {
    endTime: string;
    scheduleId: number;
    startTime: string;
} & ObfuscatedValue;
