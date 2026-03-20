import type { ObfuscatedValue } from './common';

export type HomeWorldEvent = {
    avatarID: number;
    conditionParam1: number;
    conditionParam2: number;
    eventID: number;
    eventType: string;
    furnitureSuitID: number;
    lasttime: number;
    order: number;
    rewardID: number;
    talkID: number;
} & ObfuscatedValue;
