const ConvertCollectionsToMap = snapShot => {
  const ConvertedCollection = snapShot.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      title,
      routeName: encodeURIComponent(title.toLowerCase()),
      items
    };
  });
  return ConvertedCollection.reduce((Accumulator, Collection) => {
    Accumulator[Collection.title.toLowerCase()] = Collection;
    return Accumulator;
  }, {});
};

export default ConvertCollectionsToMap;
