import type { ObfuscatedValue } from './common';

export type ActivityNatlanDrillCollectChat = {
    condition: string;
    contentTextMapHash: number;
    duration: number;
    iconHash: number;
    id: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
