import type { ObfuscatedValue } from './common';

export type GuideRating = {
    channelID: number;
    isChinaServer: boolean;
    platform: string;
    subChannelId: number;
    url: string;
} & ObfuscatedValue;
