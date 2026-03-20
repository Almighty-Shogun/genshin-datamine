import type { ObfuscatedValue } from './common';

export type DigGroupLink = {
    areaNameTextMapHash: number;
    background: string;
    groupLinkBundleId: number;
    groupLinkBundleId2: number;
    id: number;
    stage: number;
    watcherID: number[];
} & ObfuscatedValue;
