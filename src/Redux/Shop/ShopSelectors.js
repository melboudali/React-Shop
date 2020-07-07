import { createSelector } from 'reselect';

const SelectShop = state => state.Shop;

export const SelectCollections = createSelector([SelectShop], Shop => Shop.Collections);

export const SelectCurrentCollection = collectionRouteName =>
  createSelector([SelectCollections], Collections =>
    Collections.find(collection => collection.routeName === collectionRouteName)
  );
