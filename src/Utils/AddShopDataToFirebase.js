import { firestore } from './Firebase';

const AddCollectionAndDocs = (CollectionKey, CollectionObject) => {
  const CollectionRef = firestore.collection(CollectionKey);
  console.log(CollectionRef);
};

export default AddCollectionAndDocs;
