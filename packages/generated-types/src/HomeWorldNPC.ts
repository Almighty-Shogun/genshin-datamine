import type { ObfuscatedValue } from './common';

export type HomeWorldNPC = {
    avatarID: number;
    descTextMapHash: number;
    frontIcon: string;
    furnitureID: number;
    isNPC: boolean;
    npcID: number;
    quality: string;
    showNameTextMapHash: number;
    talkIDs: number[];
} & ObfuscatedValue;
