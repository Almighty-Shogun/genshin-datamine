import type { ObfuscatedValue } from './common';

export type MusicGameBookSong = {
    bpmDict: ObfuscatedValue;
    iconName: string;
    instrumentID: number;
    ugcBeatDivisionOptions: number[];
    ugcDefaultBeatDivision: number;
} & ObfuscatedValue;
