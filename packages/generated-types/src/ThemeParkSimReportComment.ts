import type { ObfuscatedValue } from './common';

export type ThemeParkSimReportComment = {
    commentTextMapHash: number;
    id: number;
    param: number;
    type: string;
} & ObfuscatedValue;
