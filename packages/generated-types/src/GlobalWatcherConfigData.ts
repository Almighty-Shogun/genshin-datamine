export type GlobalWatcherConfigData = {
    id: number;
    isDisuse: boolean;
    predicateConfigs: {
        paramList: number[];
        predicateType: string;
    }[];
    progress: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
};
