import type { ObfuscatedValue } from './common';

export type MagicStorybookDialog = {
    contentTextMapHash: number;
    groupId: number;
    showType: string;
    speakerTextMapHash: number;
} & ObfuscatedValue;
