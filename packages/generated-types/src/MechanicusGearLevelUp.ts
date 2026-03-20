export type MechanicusGearLevelUp = {
    id: number;
    gearID: number;
    gearLevel: number;
    gearNameTextMapHash: number;
    gearShortNameTextMapHash: number;
    descTextMapHash: number;
    gearIconPath: string;
    attack: number;
    attackSpeed: number;
    attackRange: number;
    buildCost: number;
    demolitionRefund: number;
    globalValueParam: {
        key: string;
        value: number;
    }[];
    effectList: number[];
    gearLevelUpMoney: number;
};
