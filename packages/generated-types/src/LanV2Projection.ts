import type { ObfuscatedValue } from './common';

export type LanV2Projection = {
    descTextMapHash: number;
    guideQuestId: number;
    guides: string[];
    leadGuides: string[];
    nameTextMapHash: number;
    pushTipsIdJoypad: number;
    pushTipsIdMouse: number;
    pushTipsIdTouch: number;
    scheduleId: number;
    sensitivityFreeRotationJoypad: number;
    sensitivitySingleAxisRotationJoypad: number;
    sensitivitySingleAxisTranslation: number;
    sensitivitySingleAxisTranslationJoypad: number;
    timeThresholdShowStandbyPrompt: number;
} & ObfuscatedValue;
