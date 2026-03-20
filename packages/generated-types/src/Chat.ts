import type { ObfuscatedValue } from './common';

export type Chat = {
    canShield: boolean;
    channel: number;
    chatChannelIcon: string;
    enterTextMapHash: number;
    id: number;
    leaveTextMapHash: number;
    priority: number;
    tabShownNameTextMapHash: number;
    tagOtherTextMapHash: number;
    tagSelfTextMapHash: number;
} & ObfuscatedValue;
