import type { ObfuscatedValue } from './common';

export type FungusFighterV3Skill = {
    cd: number;
    cost: number;
    descriptionTextMapHash: number;
    iconPath: string;
    influencingRadius: number;
    nameTextMapHash: number;
    sketchPath: string;
    skillId: number;
    tags: number[];
} & ObfuscatedValue;
