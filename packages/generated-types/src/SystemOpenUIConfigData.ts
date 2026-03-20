import type { ObfuscatedValue } from './common';

export type SystemOpenUIConfigData = {
    descTextMapHash: number;
    iconPath: string;
    id: number;
    nameTextMapHash: number;
    waitMainPage: boolean;
} & ObfuscatedValue;
