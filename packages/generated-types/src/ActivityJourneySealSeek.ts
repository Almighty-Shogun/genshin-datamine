import type { ObfuscatedValue } from './common';

export type ActivityJourneySealSeek = {
    groupID: number;
    iconName: string;
    pos: number[];
    radius: number;
} & ObfuscatedValue;
