import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../Components/ShopPageComponents/CollectionsOverview/CollectionOverview';
import Collection from '../Collection/Collection';
import PropTypes from 'prop-types';
import './Shop.scss';

const Shop = ({ match }) => {
  return (
    <div className='shopPage'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionRouteName`} component={Collection} />
    </div>
  );
};
export default Shop;
