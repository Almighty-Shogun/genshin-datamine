import type { ObfuscatedValue } from './common';

export type LimitRegion = {
    hidePaimon: boolean;
    id: number;
    name: string;
    openstate: string;
    order: number;
    reminderID: number;
    sceneId: number;
    type: string;
} & ObfuscatedValue;
