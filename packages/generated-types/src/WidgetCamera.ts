import type { ObfuscatedValue } from './common';

export type WidgetCamera = {
    hintDistance: number;
    id: number;
    scanSuccessDescTextMapHash: number;
    tipsTextMapHash: number;
    uiPath: string;
} & ObfuscatedValue;
