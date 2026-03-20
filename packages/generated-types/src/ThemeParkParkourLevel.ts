import type { ObfuscatedValue } from './common';

export type ThemeParkParkourLevel = {
    dungeonId: number;
    levelDescTextMapHash: number;
    levelId: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
