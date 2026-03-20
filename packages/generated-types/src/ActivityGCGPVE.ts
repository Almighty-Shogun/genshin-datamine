import type { ObfuscatedValue } from './common';

export type ActivityGCGPVE = {
    id: number;
    levelList: {
        baseScore: number;
        id: number;
        type: string;
    }[];
    nameTextMapHash: number;
    scheduleId: number;
    scoreLevelList: unknown[];
    tabNameTextMapHash: number;
} & ObfuscatedValue;
