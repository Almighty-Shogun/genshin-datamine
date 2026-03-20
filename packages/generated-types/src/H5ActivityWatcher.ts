export type H5ActivityWatcher = {
    h5ActivityId: number;
    condComb: string;
    condList: {
        type: string;
        paramStr: string;
    }[];
    isDailyRefresh: boolean;
    id: number;
    triggerConfig: {
        triggerType: string;
        paramList: string[];
    };
    progress: number;
};
