import type { ObfuscatedValue } from './common';

export type WidgetCameraScan = {
    action: string;
    cameraID: number;
    configID: number;
    gadgetIdList: number[];
    id: number;
    isHint: boolean;
    scannableState: number[];
} & ObfuscatedValue;
