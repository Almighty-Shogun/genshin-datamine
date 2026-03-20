export type BeyondLevelWatcher = {
    id: number;
    isDisuse: boolean;
    level: number;
    progress: number;
    rewardId: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
};
