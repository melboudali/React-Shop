import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import ConvertCollectionsToMap from '../../Utils/ConvertCollectionsToMap';
import { connect } from 'react-redux';
import { updateCollections } from '../../Redux/Shop/ShopActions';
import { firestore } from '../../Utils/Firebase';
import Collection from '../Collection/Collection';
import CollectionOverview from '../../Components/ShopPageComponents/CollectionsOverview/CollectionOverview';
import PropTypes from 'prop-types';

const Shop = ({ match, updateCollections }) => {
  useEffect(() => {
    const CollectionRef = firestore.collection('Collections').orderBy('title', 'asc');
    CollectionRef.onSnapshot(async snapShot => {
      const Collections = ConvertCollectionsToMap(snapShot);
      updateCollections(Collections);
    });
  }, [updateCollections]);
  return (
    <Fragment>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionRouteName`} component={Collection} />
    </Fragment>
  );
};

Shop.prototype = { match: PropTypes.object };

export default connect(null, { updateCollections })(Shop);
