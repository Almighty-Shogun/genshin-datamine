import type { ObfuscatedValue } from './common';

export type PuzzleFighterSkillData = {
    cd: number;
    icon: string;
    skillId: number;
    tipsTextMapHash: number;
    type: string;
} & ObfuscatedValue;
