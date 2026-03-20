import type { ObfuscatedValue } from './common';

export type ThemeParkSimEmployee = {
    iconHash: number;
    id: number;
    initLevel: number;
    maxLevel: number;
    nameTextMapHash: number;
    npcId: number;
    star: number;
} & ObfuscatedValue;
