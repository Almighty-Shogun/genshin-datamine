import type { DestroyRule, ObfuscatedValue, TextMapHash } from '../common';
import type { FoodQuality, ItemUseOperation, ItemUseTarget, MaterialItemType, MaterialType } from './common';

export type MaterialItemUse = {
    useOp: ItemUseOperation;
    useParam: string[];
};

export type Material = {
    cdGroup: number;
    cdTime: number;
    closeBagAfterUsed: boolean;
    destroyReturnMaterial: unknown[];
    destroyReturnMaterialCount: unknown[];
    destroyRule: DestroyRule;
    dropable: boolean;
    effectDescTextMapHash: number;
    effectGadgetID: number;
    effectIcon: string;
    effectName: string;
    foodQuality: FoodQuality;
    gadgetId: number;
    globalItemLimit: number;
    icon: string;
    id: number;
    interactionTitleTextMapHash: number;
    isForceGetHint: boolean;
    isHidden: boolean;
    isSplitDrop: boolean;
    itemType: MaterialItemType;
    itemUse: MaterialItemUse[];
    materialType: MaterialType;
    maxUseCount: number;
    noFirstGetHint: boolean;
    picPath: string[];
    playGainEffect: boolean;
    rank: number;
    rankLevel: number;
    satiationParams: number[];
    setID: number;
    specialDescTextMapHash: number;
    stackLimit: number;
    typeDescTextMapHash: number;
    useLevel: number;
    useOnGain: boolean;
    useTarget: ItemUseTarget;
    weight: number;
} & ObfuscatedValue & Omit<TextMapHash, 'titleTextMapHash'>;
