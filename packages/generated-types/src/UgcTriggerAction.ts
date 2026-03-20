import type { ObfuscatedValue } from './common';

export type UgcTriggerAction = {
    actionType: string;
    id: number;
} & ObfuscatedValue;
