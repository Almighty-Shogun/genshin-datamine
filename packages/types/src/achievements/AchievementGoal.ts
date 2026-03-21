import type { TextMapHash } from '../common';

export type AchievementGoal = {
    finishRewardId: number;
    iconPath: string;
    id: number;
    orderId: number;
} & Omit<TextMapHash, 'titleTextMapHash' | 'descTextMapHash'>;
