import type { ObfuscatedValue, TextMapHash, AdditionProp } from '../common';

export type AvatarTalent = {
    addProps: AdditionProp[];
    icon: string;
    mainCostItemCount: number;
    mainCostItemId: number;
    openConfig: string;
    paramList: number[];
    prevTalent: number;
    talentId: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
