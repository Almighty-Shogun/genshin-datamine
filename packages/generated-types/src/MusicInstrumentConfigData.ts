import type { ObfuscatedValue } from './common';

export type MusicInstrumentConfigData = {
    freeModePerfabPath: string;
    instrumentID: number;
    longPressNoteTailAudioEvent: string;
    performID: number;
    watcherId: number;
    widgetID: number;
} & ObfuscatedValue;
