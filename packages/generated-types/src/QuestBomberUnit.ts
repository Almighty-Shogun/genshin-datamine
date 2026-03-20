import type { ObfuscatedValue } from './common';

export type QuestBomberUnit = {
    descriptionTextMapHash: number;
    iconHash: number;
    nameTextMapHash: number;
    type: string;
} & ObfuscatedValue;
