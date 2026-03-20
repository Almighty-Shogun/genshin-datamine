import type { ObfuscatedValue } from './common';

export type MoonPhaseType = {
    descTextMapHash: number;
    name: string;
    priority: number;
} & ObfuscatedValue;
