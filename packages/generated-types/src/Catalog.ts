export type Catalog = {
    id: number;
    syncWatcherList: number[];
    tabList: number[][];
    tutorialIDList: {
        pushTips: number;
        watcher: number;
    }[];
    type: string;
};
