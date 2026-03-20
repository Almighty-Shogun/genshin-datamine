import type { ObfuscatedValue } from './common';

export type DreamSwitchingInstruction = {
    descTextMapHash: number;
    id: number;
    nameTextMapHash: number;
    type: string;
} & ObfuscatedValue;
