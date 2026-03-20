import type { ObfuscatedValue } from './common';

export type SorushTrialHitmanGallery = {
    endTransConfigId: number;
    galleryId: number;
    groupID: number;
    groupLinkID: number;
    id: number;
    levelDescTextMapHash: number;
    levelTitleTextMapHash: number;
    previewList: number[];
    startTransConfigId: number;
    target1TextMapHash: number;
    target2TextMapHash: number;
    target3TextMapHash: number;
    targetWatcher3: number;
    watcher3DropCount: number;
    watcherList: number[];
} & ObfuscatedValue;
