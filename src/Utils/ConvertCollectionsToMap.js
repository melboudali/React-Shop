import { firestore } from './Firebase';

const ConvertCollectionsToMap = async () => {
  const CollectionRef = firestore.collection('Collections');
  CollectionRef.onSnapshot(async snapShot =>
    snapShot.docs.map(doc => {
      const { title, items } = doc.data();
      return {
        ID: doc.id,
        Title: title,
        Items: items
      };
    })
  );
};

export default ConvertCollectionsToMap;
