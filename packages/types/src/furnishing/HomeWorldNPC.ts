import type { ObfuscatedValue } from '../common';
import type { HomeWorldNpcQuality } from './common';

export type HomeWorldNPC = {
    avatarID: number;
    descTextMapHash: number;
    frontIcon: string;
    furnitureID: number;
    isNPC: boolean;
    npcID: number;
    quality: HomeWorldNpcQuality;
    showNameTextMapHash: number;
    talkIDs: number[];
} & ObfuscatedValue;
