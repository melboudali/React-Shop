import React, { Fragment, lazy } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectLoading } from '../../Redux/Shop/ShopSelectors';
import Loading from '../../Components/ShopPage/Loading/Loading';
import PropTypes from 'prop-types';
const Collections = lazy(() => import('../../Components/ShopPage/Collections/Collections'));
const CurrentCollection = lazy(() =>
  import('../../Components/ShopPage/CurrentCollection/CurrentCollection')
);
const Product = lazy(() => import('../Product/Product'));

const Shop = ({ match, isLoading }) => (
  <Fragment>
    <Route exact path={`${match.path}`} component={isLoading ? Loading : Collections} />
    <Route
      exact
      path={`${match.path}/:collectionRouteName`}
      component={isLoading ? Loading : CurrentCollection}
    />
    <Route
      path={`${match.path}/:collectionRouteName/:itemName`}
      component={isLoading ? Loading : Product}
    />
  </Fragment>
);

Shop.prototype = {
  match: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  isLoading: SelectLoading
});

export default connect(mapStateToProps)(Shop);
