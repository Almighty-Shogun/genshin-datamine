import type { ObfuscatedValue } from './common';

export type WidgetCamera = {
    hintDistance: number;
    id: number;
    scanTipsTextMapHash: number;
    tipsTextMapHash: number;
    uiPath: string;
} & ObfuscatedValue;
