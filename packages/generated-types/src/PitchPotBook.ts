import type { ObfuscatedValue } from './common';

export type PitchPotBook = {
    descParams: string[];
    descTextMapHash: number;
    iconNameHash: number;
    id: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
