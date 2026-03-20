import type { ObfuscatedValue } from './common';

export type PuzzleFighterSkillEffectData = {
    effectId: number;
    effectType: string;
    iconPath: string;
    paramList: string[];
} & ObfuscatedValue;
