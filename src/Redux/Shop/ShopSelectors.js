import { createSelector } from 'reselect';

const SelectShop = state => state.Shop;

export const SelectCollections = createSelector([SelectShop], Shop => Shop.Collections);

export const SelectLoading = createSelector([SelectShop], Shop => Shop.Loading);

export const SelectAllCollections = createSelector([SelectCollections], Collections =>
         Object.keys(Collections).map(key => Collections[key])
       );

export const SelectCurrentCollection = collectionRouteName =>
  createSelector([SelectCollections], Collections => Collections[collectionRouteName]);

//   need selectcurrentitem like above i need to change items from array to object

export const SelectIsCollectionsLoaded = createSelector(
  [SelectCollections],
  Collections => !!Collections
);
