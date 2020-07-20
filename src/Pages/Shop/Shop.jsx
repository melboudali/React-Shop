import React, { Fragment, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { SelectLoading } from '../../Redux/Shop/ShopSelectors';
import { createStructuredSelector } from 'reselect';
import { updateCollections } from '../../Redux/Shop/ShopActions';
import { firestore } from '../../Utils/Firebase';
import ConvertCollectionsToMap from '../../Utils/ConvertCollectionsToMap';
import CollectionOverview from '../../Components/ShopPageComponents/CollectionsOverview/CollectionOverview';
import Loading from '../../Components/ShopPageComponents/Loading/Loading';
import Collection from '../Collection/Collection';
import PropTypes from 'prop-types';

const Shop = ({ match, updateCollections, isLoading }) => {
  useEffect(() => {
    const CollectionRef = firestore.collection('Collections').orderBy('title', 'asc');
    CollectionRef.onSnapshot(async snapShot => {
      const Collections = ConvertCollectionsToMap(snapShot);
      updateCollections(Collections);
    });
  }, [updateCollections]);
  return (
    <Fragment>
      <Route exact path={`${match.path}`} component={isLoading ? Loading : CollectionOverview} />
      <Route path={`${match.path}/:collectionRouteName`} component={Collection} />
    </Fragment>
  );
};

Shop.prototype = { match: PropTypes.object };

const mapStateToProps = createStructuredSelector({
  isLoading: SelectLoading
});

export default connect(mapStateToProps, { updateCollections })(Shop);
