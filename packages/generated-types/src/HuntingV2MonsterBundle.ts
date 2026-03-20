import type { ObfuscatedValue } from './common';

export type HuntingV2MonsterBundle = {
    abilityGroup: string;
    id: number;
    mechanismDesc1TextMapHash: number;
    mechanismDesc2TextMapHash: number;
    mechanismTitle1TextMapHash: number;
    mechanismTitle2TextMapHash: number;
    monsterId: number;
    newsTextTextMapHash: number;
    traitTextTextMapHash: number;
} & ObfuscatedValue;
