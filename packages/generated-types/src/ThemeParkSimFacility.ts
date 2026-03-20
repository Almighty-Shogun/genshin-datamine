import type { ObfuscatedValue } from './common';

export type ThemeParkSimFacility = {
    descTextMapHash: number;
    groupId: number;
    iconNameHash: number;
    id: number;
    nameTextMapHash: number;
    type: string;
} & ObfuscatedValue;
