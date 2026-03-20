import type { ObfuscatedValue } from './common';

export type TargetShootingTarget = {
    descTextMapHash: number;
    gadgetId: number;
    iconPathHash: number;
    id: number;
    nameTextMapHash: number;
    targetScore: number;
} & ObfuscatedValue;
