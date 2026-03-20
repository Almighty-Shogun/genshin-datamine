import type { ObfuscatedValue } from './common';

export type MusicGameBookGuide = {
    bpmDict: ObfuscatedValue;
    guideID: number;
    iconName: string;
    instrumentID: number;
    orderID: number;
    pushTipsId: number;
} & ObfuscatedValue;
