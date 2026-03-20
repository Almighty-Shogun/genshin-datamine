import type { ObfuscatedValue } from './common';

export type ThemeParkTriathlonLevel = {
    dungeonId: number;
    levelDescTextMapHash: number;
    levelId: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
