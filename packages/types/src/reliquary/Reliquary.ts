import type { EquipType } from './common';
import type { TextMapHash, DestroyRule } from '../common';

export type Reliquary = {
    addPropLevels: number[];
    appendPropDepotId: number;
    appendPropNum: number;
    baseConvExp: number;
    destroyReturnMaterial: number[];
    destroyReturnMaterialCount: number[];
    destroyRule: DestroyRule;
    dropable: boolean;
    equipType: EquipType;
    gadgetId: number;
    globalItemLimit: number;
    icon: string;
    id: number;
    initialLockState: number;
    itemType: "ITEM_RELIQUARY";
    mainPropDepotId: number;
    maxLevel: number;
    rank: number;
    rankLevel: number;
    setId: number;
    showPic: string;
    storyId: number;
    useLevel: number;
    weight: number;
} & Omit<TextMapHash, 'titleTextMapHash'>;
