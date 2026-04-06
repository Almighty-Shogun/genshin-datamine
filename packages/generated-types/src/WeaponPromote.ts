export type WeaponPromote = {
    addProps: {
        propType: string;
        value: number;
    }[];
    coinCost: number;
    costItems: {
        count: number;
        id: number;
    }[];
    promoteLevel: number;
    requiredPlayerLevel: number;
    unlockMaxLevel: number;
    weaponPromoteId: number;
};
