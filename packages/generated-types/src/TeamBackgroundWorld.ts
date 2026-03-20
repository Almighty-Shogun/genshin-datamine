import type { ObfuscatedValue } from './common';

export type TeamBackgroundWorld = {
    id: number;
    paramList: number[];
    path: string;
    type: string;
} & ObfuscatedValue;
