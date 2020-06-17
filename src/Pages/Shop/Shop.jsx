import React, { useState } from 'react';
import CollectionPreview from '../../Components/ShopPageComponents/CollectionPreview/CollectionPreview';
import ShopData from './ShopData';
import PropTypes from 'prop-types';
import './Shop.scss';

const Shop = props => {
  const [shopData, setShopData] = useState(ShopData);
  return (
    <div className='shop-page'>
      {shopData.map(({ id, ...shopData }) => (
        <CollectionPreview key={id} {...shopData} />
      ))}
    </div>
  );
};

Shop.propTypes = {};

export default Shop;
