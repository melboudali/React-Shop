import { createSelector } from 'reselect';

const SelectShop = state => state.Shop;

export const SelectCollection = createSelector([SelectShop], Shop => Shop.Collection);
