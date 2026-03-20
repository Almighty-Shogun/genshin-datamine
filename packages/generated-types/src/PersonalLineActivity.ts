import type { ObfuscatedValue } from './common';

export type PersonalLineActivity = {
    chapterId: number;
    descTextMapHash: number;
    feature: string;
    id: number;
    perfabPath: string;
} & ObfuscatedValue;
