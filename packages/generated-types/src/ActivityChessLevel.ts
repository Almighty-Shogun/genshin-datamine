import type { ObfuscatedValue } from './common';

export type ActivityChessLevel = {
    cardCost: number;
    cardCount: number;
    cardFortune: string;
    descTextMapHash: number;
    expToNext: number;
    fortuneList: number[];
    freeCardCount: number;
    homeHP: number;
    initialBuild: number;
    isNewCardUnlocked: boolean;
    level: number;
} & ObfuscatedValue;
