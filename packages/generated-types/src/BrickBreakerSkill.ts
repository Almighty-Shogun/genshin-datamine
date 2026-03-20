import type { ObfuscatedValue } from './common';

export type BrickBreakerSkill = {
    descParam: string[];
    id: number;
    maxLevel: number;
    skillDescTextMapHash: number;
    skillIconHash: number;
    skillTitleTextMapHash: number;
    skillType: string;
    unlockWorldLevel: number;
    upgradeDungeonLevelList: number[];
} & ObfuscatedValue;
