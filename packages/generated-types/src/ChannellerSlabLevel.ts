import type { ObfuscatedValue } from './common';

export type ChannellerSlabLevel = {
    campNameTextMapHash: number;
    descTextMapHash: number;
    groupID: number;
    id: number;
    pointNameTextMapHash: number;
    rewardID: number;
    stageID: number;
    waveID: number;
} & ObfuscatedValue;
