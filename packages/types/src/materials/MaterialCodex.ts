import type { ObfuscatedValue, TextMapHash } from '../common';
import type { MaterialCodexType } from './common';

export type MaterialCodex = {
    icon: string;
    id: number;
    isDisuse: boolean;
    materialId: number;
    questID1: number;
    questReplaceDesc1TextMapHash: number;
    questReplaceDesc2TextMapHash: number;
    questReplaceName1TextMapHash: number;
    questReplaceName2TextMapHash: number;
    showOnlyUnlocked: boolean;
    sortOrder: number;
    type: MaterialCodexType;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
