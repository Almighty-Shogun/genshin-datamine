import type { ObfuscatedValue } from './common';

export type ActivityTanukiTravelRouteData = {
    descTextMapHash: number;
    hiddenSubQuestId: number;
    id: number;
    neededFishQuestId: number;
    neededHomeQuestId: number;
    openIndex: number;
    questId: number;
    regionTextMapHash: number;
    reviewTextMapHash: number;
    routeLastQuestId: number;
    titleTextMapHash: number;
    watcherId: number;
} & ObfuscatedValue;
