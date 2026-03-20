import type { ObfuscatedValue } from './common';

export type EnergyCaster = {
    abilityName: string;
    actionType: string;
    id: number;
    triggerType: string;
} & ObfuscatedValue;
