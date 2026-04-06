export type H5ActivityWatcherShared = {
    id: number;
    isDisuse: boolean;
    progress: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
};
