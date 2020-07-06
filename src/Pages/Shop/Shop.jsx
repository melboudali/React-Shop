import React from 'react';
import CollectionOverview from '../../Components/ShopPageComponents/CollectionsOverview/CollectionOverview';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Shop.scss';

const Shop = ({ match }) => {
  return (
    <div className='shopPage'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
    </div>
  );
};
export default Shop;
