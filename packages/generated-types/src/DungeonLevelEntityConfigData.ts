import type { ObfuscatedValue } from './common';

export type DungeonLevelEntityConfigData = {
    abilityGroupName: string;
    clientId: number;
    descTextMapHash: number;
    id: number;
    levelConfigName: string;
    show: boolean;
    switchTitleTextMapHash: number;
} & ObfuscatedValue;
