import type { ObfuscatedValue } from './common';

export type VehicleSkill = {
    abilityName: string;
    dragType: string;
    energyMaxCost: number;
    energyOnceCost: number;
    energyUIType: string;
    globalValueKey: string;
    id: number;
    lockShape: string;
    lockWeightParams: number[];
    maxChargeCount: number;
    skillCD: number;
    skillDescTextMapHash: number;
    skillIcon: string;
    skillNameTextMapHash: number;
    triggerID: number;
} & ObfuscatedValue;
