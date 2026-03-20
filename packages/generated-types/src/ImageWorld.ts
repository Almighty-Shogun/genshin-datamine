import type { ObfuscatedValue } from './common';

export type ImageWorld = {
    id: number;
    syncDungeonEntry: boolean;
    syncTransport: boolean;
} & ObfuscatedValue;
