import type { ObfuscatedValue } from './common';

export type BeyondOfficialEntity = {
    descTextMapHash: number;
    entityType: string;
    icon: string;
    id: number;
    jsonName: string;
    nameTextMapHash: number;
} & ObfuscatedValue;
