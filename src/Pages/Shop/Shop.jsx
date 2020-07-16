import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Collection from '../Collection/Collection';
import CollectionOverview from '../../Components/ShopPageComponents/CollectionsOverview/CollectionOverview';
import PropTypes from 'prop-types';

const Shop = ({ match }) => (
  <Fragment>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionRouteName`} component={Collection} />
  </Fragment>
);

Shop.prototype = { match: PropTypes.object };

export default Shop;
