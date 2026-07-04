import type { ObfuscatedValue } from '../common';
import type { ShopOpenStateType, ShopRefreshType, ShopType } from './common';

export type Shop = {
    cityDiscountLevel: number;
    cityId: number;
    hasSubSheet: boolean;
    openStateType: ShopOpenStateType;
    refreshParam: number;
    refreshType: Extract<ShopRefreshType, "SHOP_REFRESH_NONE" | "SHOP_REFRESH_MONTHLY">;
    scoinDiscountRate: number;
    shopId: number;
    shopType: ShopType;
    vipFuncID: number;
} & ObfuscatedValue;
