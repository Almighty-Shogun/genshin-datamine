export type VintageMarketEnvEvent = {
    id: number;
    duration: number;
    effectList: {
        type: string;
        param: string;
    }[];
    envEventDescTextMapHash: number;
};
