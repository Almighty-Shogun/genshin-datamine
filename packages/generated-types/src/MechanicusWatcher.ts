export type MechanicusWatcher = {
    rewardTokens: number;
    descTextMapHash: number;
    id: number;
    triggerConfig: {
        triggerType: string;
        paramList: string[];
    };
    progress: number;
    isDisuse: boolean;
};
