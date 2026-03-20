import type { ObfuscatedValue } from './common';

export type RadarHint = {
    areaRadius: number;
    audioName: string;
    banSubAreaIDList: unknown[];
    defaultDisable: boolean;
    effectType: string;
    iconName: string;
    id: number;
    name: string;
    offsetRadius: number;
    radarHintType: string;
    radius: number;
    showHeight: boolean;
} & ObfuscatedValue;
