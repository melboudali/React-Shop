import React, { Fragment, useEffect, lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectLoading } from '../../Redux/Shop/ShopSelectors';
import { fetchCollectionsStart } from '../../Redux/Shop/ShopActions';
import Loading from '../../Components/ShopPageComponents/Loading/Loading';
import PropTypes from 'prop-types';
// Code Splitting
const Collections = lazy(() =>
  import('../../Components/ShopPageComponents/Collections/Collections')
);
const CurrentCollection = lazy(() =>
  import('../../Components/ShopPageComponents/CurrentCollection/CurrentCollection')
);
const ItemDetails = lazy(() =>
  import('../../Components/ShopPageComponents/ItemDetails/ItemDetails')
);

const Shop = ({ match, fetchCollectionsStart, isLoading }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <Fragment>
      <Route exact path={`${match.path}`} component={isLoading ? Loading : Collections} />
      <Route
        exact
        path={`${match.path}/:collectionRouteName`}
        component={isLoading ? Loading : CurrentCollection}
      />
      <Route
        path={`${match.path}/:collectionRouteName/:itemName`}
        component={isLoading ? Loading : ItemDetails}
      />
    </Fragment>
  );
};

Shop.prototype = {
  match: PropTypes.object.isRequired,
  fetchCollectionsStart: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  isLoading: SelectLoading
});

export default connect(mapStateToProps, { fetchCollectionsStart })(Shop);
