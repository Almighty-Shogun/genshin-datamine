export type VintageMarketSkill = {
    id: number;
    effectList: {
        type: string;
        param: string;
    }[];
    skillNameTextMapHash: number;
    skillDescTextMapHash: number;
    iconNameHash: number;
    tabType: number;
    sortOrder: number;
};
