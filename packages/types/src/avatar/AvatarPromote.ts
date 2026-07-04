import type { AdditionProp, CostItem } from '../common';

export type AvatarPromote = {
    addProps: AdditionProp[];
    avatarPromoteId: number;
    costItems: CostItem[];
    promoteAudio: string;
    promoteLevel: number;
    requiredPlayerLevel: number;
    scoinCost: number;
    unlockMaxLevel: number;
};
