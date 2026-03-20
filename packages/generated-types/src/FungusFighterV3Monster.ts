import type { ObfuscatedValue } from './common';

export type FungusFighterV3Monster = {
    configId: number;
    descriptionTextMapHash: number;
    iconPath: string;
    id: number;
    monsterId: number;
    nameTextMapHash: number;
    sortID: number;
    ultimateSkillId: number;
} & ObfuscatedValue;
