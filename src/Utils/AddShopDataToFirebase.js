import { firestore } from './Firebase';

const AddCollectionAndDocs = async (CollectionKey, CollectionObject) => {
  const CollectionRef = firestore.collection(CollectionKey);
  const Batch = firestore.batch();
  CollectionObject.forEach(Obj => {
    const ObjectRef = CollectionRef.doc();
    Batch.set(ObjectRef, Obj);
  });
  return await Batch.commit();
};

// To use the function above you need this
//  useEffect(() => {
//    (async function () {
//      AddCollectionAndDocs(
//        'Collections',
//        Collections.map(({ title, items }) => ({ title, items }))
//      );
//    })();
//  });

export default AddCollectionAndDocs;
