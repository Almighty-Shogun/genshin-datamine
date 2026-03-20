import type { ObfuscatedValue } from './common';

export type WidgetNewSeeker = {
    gadgetIdList: number[];
    guideOpenState: string;
    iconType: string;
    id: number;
    targetType: string;
} & ObfuscatedValue;
