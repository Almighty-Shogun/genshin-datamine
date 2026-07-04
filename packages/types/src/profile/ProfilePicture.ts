import type { ObfuscatedValue } from '../common';

export type ProfilePicture = {
    iconPath: string;
    id: number;
    nameTextMapHash: number;
    priority: number;
    unlockDescTextMapHash: number;
    unlockParam: number;
} & ObfuscatedValue;
