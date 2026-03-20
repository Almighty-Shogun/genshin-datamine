import type { ObfuscatedValue } from './common';

export type MusicGameBasicConfigData = {
    bpm: number;
    bpmDict: ObfuscatedValue;
    complexHintJsonPath: string;
    id: number;
    jsonPath: string;
    lateDropTime: number;
    musicID: number;
    musicLevel: number;
    noteCount: number;
    scaleTime: number;
    scoreGreat: number;
    scoreLevelList: number[];
    scoreLongPress: number;
    scoreOneKey: number;
    simpleHintJsonPath: string;
    ugcBeatDivisionOptions: number[];
    ugcDefaultBeatDivision: number;
    unlockTipsTextMapHash: number;
} & ObfuscatedValue;
