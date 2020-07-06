import { createSelector } from 'reselect';

const SelectShop = state => state.Shop;

export const SelectCollections = createSelector([SelectShop], Shop => Shop.Collections);
