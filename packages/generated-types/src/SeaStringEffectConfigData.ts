import type { ObfuscatedValue } from './common';

export type SeaStringEffectConfigData = {
    audioEventName: string;
    effectName: string;
    id: number;
    playInterval: number;
} & ObfuscatedValue;
