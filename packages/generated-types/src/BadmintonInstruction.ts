import type { ObfuscatedValue } from './common';

export type BadmintonInstruction = {
    descTextMapHash: number;
    id: number;
    nameTextMapHash: number;
    type: string;
} & ObfuscatedValue;
