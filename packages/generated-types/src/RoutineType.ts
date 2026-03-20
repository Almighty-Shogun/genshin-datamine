import type { ObfuscatedValue } from './common';

export type RoutineType = {
    delayUnloadTime: number;
    descTextMapHash: number;
    icon: string;
    nameTextMapHash: number;
    refreshId: number;
    routineType: string;
} & ObfuscatedValue;
