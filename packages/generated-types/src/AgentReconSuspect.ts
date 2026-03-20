import type { ObfuscatedValue } from './common';

export type AgentReconSuspect = {
    descTextMapHash: number;
    nameTextMapHash: number;
} & ObfuscatedValue;
