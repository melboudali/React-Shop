import { createSelector } from 'reselect';

const SelectShop = state => state.Shop;

export const SelectCollections = createSelector([SelectShop], Shop => Shop.Collections);

export const SelectLoading = createSelector([SelectShop], Shop => Shop.Loading);

export const SelectAllCollections = createSelector([SelectCollections], Collections =>
  Object.keys(Collections).map(key => Collections[key])
);

export const SelectCurrentCollection = collectionRouteName =>
  createSelector([SelectCollections], Collections => Collections[collectionRouteName]);

export const SelectCurrentItem = (ItemName, collectionRouteName) =>
  createSelector([SelectCollections], Collections =>
    Collections[collectionRouteName].items.find(
      item => ItemName.replace(/\s/g, '') === item.name.replace(/\s/g, '')
    )
  );

export const SelectAllItems = createSelector([SelectCollections], Collections => {
  let AllItems = [];
  if (Collections) {
    const CollectionsArray = Object.keys(Collections).map(key => Collections[key]);
    CollectionsArray.map(({ items, title }) => {
      let customItems = items.map(item => ({
        ...item,
        url: title
      }));
      return (AllItems = [...AllItems, ...customItems]);
    });
  }
  return AllItems;
});
