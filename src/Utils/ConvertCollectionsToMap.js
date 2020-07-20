import { firestore } from './Firebase';

const ConvertCollectionsToMap = async () => {
  const CollectionRef = firestore.collection('Collections');
  CollectionRef.onSnapshot(async snapShot => {
    const ConvertedCollection = snapShot.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        id: doc.id,
        title,
        routeName: encodeURIComponent(title.toLowerCase()),
        items
      };
    });
    return ConvertedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      console.log(accumulator);
      return accumulator;
    }, {});
  });
};

export default ConvertCollectionsToMap;
