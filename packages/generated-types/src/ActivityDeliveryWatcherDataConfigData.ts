export type ActivityDeliveryWatcherDataConfigData = {
    id: number;
    triggerConfig: {
        triggerType: string;
        paramList: string[];
    };
    progress: number;
};
