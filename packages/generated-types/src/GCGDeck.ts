import type { ObfuscatedValue } from './common';

export type GCGDeck = {
    cardList: number[];
    characterList: number[];
    id: number;
    initEnergyList: number[];
    initHpList: number[];
    waitingCharacterList: boolean[];
} & ObfuscatedValue;
