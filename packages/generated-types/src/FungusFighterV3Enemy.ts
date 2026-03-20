import type { ObfuscatedValue } from './common';

export type FungusFighterV3Enemy = {
    circularIconPath: string;
    descriptionTextMapHash: number;
    iconPath: string;
    id: number;
    isDangerous: boolean;
    nameTextMapHash: number;
    sortID: number;
    unlockLevel: number;
} & ObfuscatedValue;
