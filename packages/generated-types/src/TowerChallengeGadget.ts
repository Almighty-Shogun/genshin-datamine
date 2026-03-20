import type { ObfuscatedValue } from './common';

export type TowerChallengeGadget = {
    gadgetId: number;
    iconName: string;
    nameTextMapHash: number;
} & ObfuscatedValue;
