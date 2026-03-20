import type { ObfuscatedValue } from './common';

export type AutoChessCamp = {
    count: number;
    descParam: number[];
    icon: string;
    id: number;
    titleTextMapHash: number;
} & ObfuscatedValue;
