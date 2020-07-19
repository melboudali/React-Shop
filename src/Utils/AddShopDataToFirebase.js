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

export default AddCollectionAndDocs;
