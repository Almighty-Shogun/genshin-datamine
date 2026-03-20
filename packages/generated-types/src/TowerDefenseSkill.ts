import type { ObfuscatedValue } from './common';

export type TowerDefenseSkill = {
    descParamList: number[];
    gadgetId: number;
    skillCD: number;
    skillDescTextMapHash: number;
    skillIcon: string;
    skillId: number;
    skillNameTextMapHash: number;
} & ObfuscatedValue;
