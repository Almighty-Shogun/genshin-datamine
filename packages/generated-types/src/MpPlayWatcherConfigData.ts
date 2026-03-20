export type MpPlayWatcherConfigData = {
    challengeDescTextMapHash: number;
    challengeTitleTextMapHash: number;
    id: number;
    isDisuse: boolean;
    isStore: boolean;
    mpPlayId: number;
    priority: number;
    progress: number;
    triggerConfig: {
        paramList: string[];
        triggerType: string;
    };
};
